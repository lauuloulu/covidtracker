
import { Card, CardContent, CardHeader, Typography, CardMedia } from '@mui/material';
//import img from "../assets/react.svg"
const ContainerCard = () => {
  return (
    <Card>
      <CardHeader
      />
      <CardContent>
        <CardMedia

            component="img"
            height="500"
            /*image="../assets/react.svg"*/
            alt="img"
            
        />
        <Typography variant="body1">
          numero que traera la API
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ContainerCard;

