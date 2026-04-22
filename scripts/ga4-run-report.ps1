# Wrapper that the Windows Task Scheduler (or you) can invoke to generate the
# weekly GA4 report. Handles:
#   - Locating node.exe even if PATH is sparse
#   - Running from the project root regardless of CWD at invocation time
#   - Writing a timestamped log so you can see the last successful run
#
# Usage:
#   powershell -ExecutionPolicy Bypass -File scripts\ga4-run-report.ps1
#
# To install as a weekly scheduled task, run scripts\ga4-schedule-install.ps1.

$ErrorActionPreference = "Stop"

# Resolve the project root from this script's location (.../scripts/this.ps1 -> ...)
$scriptDir  = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectDir = Split-Path -Parent $scriptDir

# Find node.exe — try PATH first, then the default install location
$nodeExe = (Get-Command node -ErrorAction SilentlyContinue).Source
if (-not $nodeExe) {
    $nodeExe = "C:\Program Files\nodejs\node.exe"
}
if (-not (Test-Path $nodeExe)) {
    Write-Error "node.exe not found on PATH or at C:\Program Files\nodejs\node.exe"
    exit 1
}

# Ensure the log directory exists
$logDir = Join-Path $projectDir "reports\logs"
if (-not (Test-Path $logDir)) {
    New-Item -ItemType Directory -Path $logDir -Force | Out-Null
}

$logFile  = Join-Path $logDir ("ga4-run-" + (Get-Date -Format "yyyy-MM-dd-HHmmss") + ".log")
$reportJs = Join-Path $projectDir "scripts\ga4-report.mjs"

# Run the report, capturing both stdout and stderr to the log
Push-Location $projectDir
try {
    "=== GA4 Report Run: $(Get-Date -Format 'u') ===" | Out-File -FilePath $logFile -Encoding utf8
    & $nodeExe $reportJs 2>&1 | Tee-Object -FilePath $logFile -Append
    $exit = $LASTEXITCODE
    "=== Exit code: $exit ===" | Out-File -FilePath $logFile -Encoding utf8 -Append
    exit $exit
} finally {
    Pop-Location
}
