declare module "leaflet.markercluster" {
  // Side-effect import — adds L.markerClusterGroup to Leaflet
}

declare module "leaflet.markercluster/dist/MarkerCluster.css" {
  const content: string;
  export default content;
}

declare module "leaflet.markercluster/dist/MarkerCluster.Default.css" {
  const content: string;
  export default content;
}
