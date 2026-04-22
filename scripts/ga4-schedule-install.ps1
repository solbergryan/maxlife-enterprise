# Registers a Windows scheduled task that runs the GA4 weekly report
# every Monday at 5pm. Idempotent — re-running updates the existing task.
#
# No admin required (creates the task under the current user account).
#
# Usage:
#   powershell -ExecutionPolicy Bypass -File scripts\ga4-schedule-install.ps1
#
# To unregister later:
#   Unregister-ScheduledTask -TaskName "MaxLife GA4 Weekly Report" -Confirm:$false

$ErrorActionPreference = "Stop"

$scriptDir  = Split-Path -Parent $MyInvocation.MyCommand.Path
$runner     = Join-Path $scriptDir "ga4-run-report.ps1"
$taskName   = "MaxLife GA4 Weekly Report"

if (-not (Test-Path $runner)) {
    Write-Error "Runner script not found: $runner"
    exit 1
}

# Build the scheduled task definition
$action = New-ScheduledTaskAction `
    -Execute "powershell.exe" `
    -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$runner`""

# Every Monday at 5:00 PM
$trigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Monday -At 5:00pm

# Run whether user is logged in or not; wake the computer if asleep;
# retry once if it fails (e.g. network hiccup)
$settings = New-ScheduledTaskSettingsSet `
    -AllowStartIfOnBatteries `
    -DontStopIfGoingOnBatteries `
    -StartWhenAvailable `
    -WakeToRun `
    -RestartCount 1 `
    -RestartInterval (New-TimeSpan -Minutes 10)

# Run as the current user (not elevated; writes to the user's profile)
$principal = New-ScheduledTaskPrincipal -UserId "$env:USERDOMAIN\$env:USERNAME" -LogonType Interactive -RunLevel Limited

$task = New-ScheduledTask -Action $action -Trigger $trigger -Settings $settings -Principal $principal `
    -Description "Generates the MaxLife GA4 weekly report and writes it to reports\ga4-weekly-YYYY-MM-DD.md"

Register-ScheduledTask -TaskName $taskName -InputObject $task -Force | Out-Null

Write-Host ""
Write-Host "Scheduled task '$taskName' registered." -ForegroundColor Green
Write-Host "  Next run: Next Monday at 17:00 local time"
Write-Host "  Runner:   $runner"
Write-Host "  Logs:     <project>\reports\logs\ga4-run-YYYY-MM-DD-HHMMSS.log"
Write-Host ""
Write-Host "Trigger manually anytime with:"
Write-Host "  Start-ScheduledTask -TaskName `"$taskName`""
Write-Host ""
Write-Host "Uninstall with:"
Write-Host "  Unregister-ScheduledTask -TaskName `"$taskName`" -Confirm:`$false"
