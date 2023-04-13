import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function UTMCard(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345, backgroundColor: props.color }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="istoric">
                        T
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Brief History about TUM"
                subheader="March 20, 2023"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://www.eduopinions.com/wp-content/uploads/2018/02/Technical-University-of-Moldova-UTM-campus-610x406.jpg"
                alt="TUM"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    The Technical University of Moldova was founded in 1964, under the name The Polytechnic Institute of Chișinău,
                    as an education center with engineering and economic specialties transferred from the Moldova State University.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Mini-History:</Typography>
                    <Typography paragraph>
                        The institution had begun its first academic year (1964 – 1965) with 5140 students (2085 of which were full-time students) within 5 faculties: Electrotechnics, Mechanics, Technology, Construction, and Economics.
                        The academic staff included 278 teachers, out of which only 36 were holders of academic certifications and scientific titles.
                    </Typography>
                    <Typography paragraph>
                        Currently, the Technical University of Moldova registers a total of 11,500 students. The institution offers courses in about 150 specialties and specializations, within 11 faculties:
                        Faculty of Electronics and Telecommunications;
                        Faculty of Energetics and Electrical Engineering;
                        Faculty of Computers, Informatics and Microelectronics;
                        Faculty of Food Technology;
                        Faculty of Mechanical Engineering and Transport;
                        Faculty of Architecture and Urban Planning;
                        Faculty of Constructions, Geodesy and Cadastre;
                        Faculty of Economic Engineering and Business;
                        Faculty of Design;
                        Faculty of Veterinary Medicine;
                        Faculty of Agricultural, Forestry and Environmental Sciences.
                    </Typography>
                    <Typography paragraph>
                        TUM also provides postgraduate education (Master’s and Doctoral degrees), as well as refresher training courses for the academic staff.
                        Over the 59 years of its activity, UTM has succeeded in preparing an extensive number of specialists, with an employment rate of 85%.
                        The University includes a Tech-Science Library with reading rooms, workshop spaces for digital manufacturing, as well as IT centers.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}