import { useRouter } from 'next/dist/client/router';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import CustomTileLayer from './customTileLayer';
import L from 'leaflet';

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type MapProps = {
  places?: Place[];
};

export default function Map({ places }: MapProps) {
  const router = useRouter();

  const icon =
    '<svg width="385" height="513" viewBox="0 0 385 513" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M191.654 512.391C291.293 419.788 356.627 354.391 379.154 243.39C441.153 -62.1095 -52.755 -99.6094 4.65343 243.39C23.5682 356.4 85.1986 413.596 191.614 512.353L191.654 512.391ZM191.654 78.3906C52.6543 78.3906 49.6543 296.391 191.654 296.391C322.654 296.391 330.654 78.3906 191.654 78.3906Z" fill="#e20e8d"/></svg>';

  const svgURL = 'data:image/svg+xml;base64,' + btoa(icon);

  const markerIcon = new L.Icon({
    iconUrl: svgURL,
    iconSize: [26, 36],
    iconAnchor: [18, 35]
  });

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <CustomTileLayer />
      {places?.map(({ id, name, location, slug }) => {
        const { latitude, longitude } = location;

        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
            icon={markerIcon}
            eventHandlers={{
              click: () => {
                router.push(`/place/${slug}`);
              },
              mouseover: () => {
                console.log('nada ainda');
              }
            }}
          ></Marker>
        );
      })}
    </MapContainer>
  );
}
