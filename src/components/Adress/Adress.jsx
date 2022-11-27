import { AdressText } from './Adress.styled';
export const Adress = ({ street, city, geo: { lat, lng } }) => {
  return (
    <>
      <AdressText>
        City: <span>{city}</span>
      </AdressText>
      <AdressText>
        Street: <span>{street}</span>
      </AdressText>
      <AdressText>
        Latitude: <span>{lat}</span>
      </AdressText>
      <AdressText>
        Longitude: <span>{lng}</span>
      </AdressText>
    </>
  );
};
