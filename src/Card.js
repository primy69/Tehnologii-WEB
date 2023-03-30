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

export default function UTMCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
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
                image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaGhwaHBwcHBocHBoaHBoeGhwaHBgcIS4lHh4rIRoeJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAEUQAAEDAgQDBQUFBQYEBwAAAAEAAhEDIQQSMUFRYfAFEyJxgQaRobHRFDLB4fEHIzNSYkJydJKz0hU0Q4MWJERTY4Ky/8QAGAEBAQEBAQAAAAAAAAAAAAAAAgEAAwT/xAAjEQACAgICAgIDAQAAAAAAAAAAAQIRITESQQNRE2FxofAi/9oADAMBAAIRAxEAPwD42ESoImhUhSsK4VtaqEqEQara1GCqkFsWQqCcWKZFqNYFMXTFbGGVZYrQWwHBVCZN1eSdOK1EsBjboS26blUhWjWLyqi1NhGG6LUXkZiEdIpjwhpKVk14BrC6ptgmVGqBnFWjXgWDZFmnVW9itjL3WoloIsCotvIHmnuZbToIe7uUqCpC3FLPBaDT2m/W6F1GBdRplTQiEJ1RukKmFERAqLUxgRPHXJaiWKe2DohDQjeZugykrFQDwNkITHNSyEWNFSooosUFE1UiAWMWBKNrUsLRCyCxaNrLIoE9aqi5INkDiETBfVA5E0cliMY6yAXsqi6bRbdLZHhCn0zK0YdtjaUYEzN7/ipTdE2B4QqlTC5WhRm6hFt1eeTpEckw050uVaI3WxWW1tN/1TBpojpsvB1nz5p5a0GD9BJVUSSkYnjS2qUyy2YgCwA9do9Ek0TMgjr9EWsii8CASmB3JG1s/jMKNZfitRmxZBkJuWIv1yRsYJmDvtonQPd8OiqokcgGN3Isic2NbT19EylwsQhLLzw4lOsHO8mUG5nzlASdL9apj429/XVlU7rmdEKcLWS4hOzbBLqO5fBRjRMwlVnk3QBXZSy0McAqi3wVTNgiBgALGFObCW5q0VErLqo0VMVA4KJ8KKUXkZwiAVBqa61lEVsBpTmoGwjKSCynoQEWZSVjDQB8FYbO6Kizj+ae4W0jVNI5t0ZHMMp9EtBuOuKpw8vRHltf3rJEbwSfKPj71b2xAGn5cUt1Lr6KptB/RWzUEIEz11ZGKe/WiAhpsOtkwaDfZVEYDXEmACtb6YABm/C3W6zU7FPJ4xfj6JR0GWyPpA3HqlVBlne8LZSp2Pu2+qzvpTJEGN1WiRkZ6V7GI4cfVNa0AmLc4lC1kxxPz+qjg5t/iihN2zRSAAub8EmuzQkHj8lbqhgTfn1wRuYS4H1jyS3gCw7DpuzW5QFVZsWhVeZPn18Emq6ROwss3gyWQDvHldAbbog4/CUBHvXNnVC8nOVC0nUpsQCSUNJwP1Uotka23zWZw5LSDZCBso0JOgWMGqE2utGSISal91mjJ2xIeTPBEx10WUAKAX0RoVokKKso4KLGwJDUcIAUbVCsqNE1rd1BxTAkkFsUQrDVZRsAVojZqawRZLe4lExyPfT5pnLsWwEwNEThcq2NvumZQSfjwVSI2K8vVLqCPNOeDolPbNyYj3KMsRvZeHNSoym0gF72saTMAvcGCY2kr37f2R4veth/81T/AGLwHZ9akKlN1SHMa9jntBEuY1wLm3I1aCNRqvoJ9puxI/5CqRrozf8A7qDvo6pLss/slxcz31D3v/2K2/snxVprULHYv/2Lqdlt7LxtDFOw+Ecw0KRdLrXc15aW5Xm4LDryQ40dmYPC4N1fCOe6vRa6WX8QpsLi7M9upftzU5SsrhGjEP2W4oaVcOfM1P8AavJ9n+z9WvjHYNrmB7HvY5xJyk080wcpMeGBZeqb7T9iR/yVQDh4Pd/FWP8AZ2+m7tUPptLWO74sb/Kwhxa03NwICfKVOznwjao5DPY+saeJrMfTP2V72VGjPmPdnxPaMsFsAkf3TuuI5gLMxN+A8l9Z9nafcYupUI/d4vE4vD1AdO8bWe+iT5tNRvqF849ouy3YbEVaBNmPhpO7D4mTzykesq+OVtpm8sUkmjmUqbTrpH6aLudgezVTFMqvY9rKdFoc5zy4DQuIEA6Bs+oXED4MDQTcb2lfWsD2V3eDwuBgh+Lf3lfZzaTQKlSY0OUMp+blZvigQjyeT59j/Z2rSwlLFFzclYhrWguzAkOcMwIj+wdDwXBceU+i+ie1IJ7EwEf+42fLJVXzdz/otGTayWcUnSDAFzySXM1M/FEx+vCCrLAVtkWDPkB1M8ET2Q2AFIIKOm4O1680aG2xAZIRhsabotZ4KNA9ZWozZH21MpRbN0wXKtzIkLUZOjM4fVENkTWqPbzRHZc81FYb6+9WrTDaMgbZWAjBtCvKhQ7I0j0R22QtZaU02sBskgtgAX1smFkaFUxs9X5om+U36CSC2MoxxKLEWgzCSG309xUrzxPr8lbwSsj8O8nz04W9UYYQSOfK/RSKZ4HjqjDiZMj433VTC1k9F7K+ylTG1crXZabADVeb5Qf7LdnOMGOGp4H6P2LQo0/B2ZgmVg05XYqs4NY4jUMqFrn1L/yNDOBXybCdpYik2pSZUdkqDLUYHeF7bAg7iRYlpBiRK9P277U4rE020qFN1CkxgaadHMZI3LmgEMgQGjnM7CUZN/R1hOKX2fTc3av8mA/zV/8AYsdTtHEPpdoUMSyiHUsNmBpF5a4VKdQx4wDIycN18g7AwtZmJwpe2o0faKMlzXgfxWWJIhfXsYf33a3+Epf6ddc2qOilZ4f9lTIw3anOgz/8YhH+0Rs4Lsr/AA5t/wBqin/syoObh+0S5rgHUGEEggO8Ff7pIvYj3pnt9Re7Bdn5WF0YczAJyju6RkkC2iaS5f3oEm/j/vZ6ql2jXZR7Oo4dtFz62HBmqXhoFOkx1sgJk5jshjEntDBnEigIZiMvcmodWMzZs7RyiOamB/idj/4ap/oUl5b2QDz2zVJa7IKuJGaDlnM4Rm04WRS3+BNvH5R6jC9mmvg8WxhioMXiH03fy1WVy9h/zNA8iUvF9oPLsLjcOGA4hrcO8VMwa15JczNluCHh7J4uAWvsbGdxQrPguH2+s10AmGvxJaXR/SHSf7pSqvZbXHGYA2bVBxNHgC90vj+7VAdH9ay2WWlQHaH2utVo4TENw+Soe8f3RqOIp0nNcQ7M0ABzsred+BXU7GHfYnEYk/dZ/wCWpeTDNVw86lp/+NeQ9kMO7C4PEYqD31QijSabnPm7tojnUdcf0L2fY7RhzSwTQSGYcve+DBdnaJnSXEvcRrcLSxhEhmmzzGHD/sPZfdBned8MueQ2e6rfey304LR7VntD7HX71uD7vIc2Q1i6JH3Q5sT5rhdv0Hv7GwIYxzj3gMNBJAyVb20/NeFdh6jfE+m9rRuWPAHmSLJxjefs5zm0qro57qf3reittK029OupTqjwSdQD1dUyARvv+sLtSs8/J0Yq1E3gaXPklNZay3ufePO43QvpwNRZFxGpPTMrLyPVEQJPw/FJaSNhKMSToghtFMYQdUNWpBg3R1nREJYp5r6cfxWfpFXtlsqgCd0D4O9ircBNpifel1Bvui2JIbmHUKJWYqLWWkMawFQsnr5qyNOforMhUITnWgJTXGf1UeARzUbbWbrGSwOpD0CNmsDT80vQWTcO/l7lUFlhljm+XuShSPMp9SoLkLOx8GVXRFY8MNgAJ5ptMHTKAOI5/JAyo2dpjoLTQpGSCetN9U4r0CTrYdEZZtpA9/Nel9h2uzVsgrn7hPdV2UI+/GbORm3iNL8Vxsoi1/iDfUlczEUmyJN45G3QSnHFHPxy/wBWfTO0m1c2HzfaQPtWH/iYujVYf3zdabCXE89tV6PGj992t/haX+lXXx3s2uynWpVBox7Hutsx4cfkvtFekDjcTRcY+2YRuR2xNPvGPAPECqx3kV55x4ns8UuSOd7Mtf8AYa897H2ZuXPWZVb/AA3/AHGtM0xpYxsP7Krtxr/+H4bL3tsLfu6zKTf4TfvtdeoOQnfivDey/awwAx2HxFOr3lRopw0NIa5oqNJcXOFjnaQRMi/BO7d7VGNp4LDUKbzUpM7o5g2HOLGNlsOJyywkkgWEqqLbvojmkq7Pf4F37zsnnhqn+hSWT2PDvtNc/vcv2nE/9Zvdz3jv/TzmnnGt106OHAxeFpAyMJhnZnbAvDKbATsSKbjHBfMuxe2mUO0X4tzXuYX1nAMALoeXZYDiOIm6kYtp0Wc1Fq/Z9Hwod9lxOTPP2uv/AA6jaTv45mKjrD8dEzFOcKeHxRa5r8O7K8Oc17jSfDHlzmHKTGR//wBV4Ltj2ppvwVfDhlQOqYh9VpIYGhjq/eAOIcTmi1gRO+6V7F+0rMM2rTrMe+nWbdrA0wbjRzgILSZvsEvje6A/KsJPrf2fS8ZSbVxdJgju8ODiH6Qaj8zac+QL3e5X2Q97sRVe4VQHNMB1em+mIIAyU2mWmBM8zxXgGe1AbgqtGKhrVPC57g0DJZgEhxM920DSxcblYPY72lp4Ss59Vji11PI0MDZkuabhxbbwlZ+JpP8AQV502v39Ht+z6b/+GYQNFXMInuqzKLv7WrnGC3+ny4Lg+0TKv2epIxUZb5sZRe3UfeY0y4cguP2p7RUamBoYUNdnpODiTlymA4QCHEz4xqBoV5h7wHWA9RolHx9v2Gfm6XoS0EjTTqfkmCm0m823GmnBW1w1m0RHzTAAAeOltuK7pHBsx1QALeQvc3+iU+AYAjz49FPewecLMY2/Vc5HWOSywROsfDyRPow0Eax1qha2CmgTcCw25+SlFbMAEnf5T6pmgjaNOCN7QHSDqf0VsuHGTPBBIbYtlPeOuKouBMRCJrj5mPU8ljcdbKN0JKw8wUQ5VER4LLwVM1p1QtKv5BY1Audy0R0zPPzS+XFMbHqsjPQZuICtoI0lLMrQwxePNJAeAtutUIbH4o3vLuEeWw/VA+4MDTU/lsqFFYcguvz/ABXQogF0AwLdBcyibnUc5/BPpUy45QeMk/BWLok432dTgOM7cCVgxDpgXnTfiipMcRcgRABM3AP5pww/iGZ3Meq6O5I5KovLMzTG8co/NfSfZLtunjcPTwlaqaOKolpw1e0yBDRezjHgcw/fbz0+f1KAIJIgAaT81ioYcucReBfz4LnOLeDrCaVs+4dp4YVIHaHZ7qj2iBXwwL2uA5NcKjf7pDgOJV9l4dtORgOz3se6xrYgFjWg6mHuNR391oAPFfM8H7bY7Dtytruy6NDw19vNwJjyKZiPbPG12kPruy7tZlZI5lgBj1QUHqzo/JHdHrfaftyng6L8LSqmtiqxnEVbTLrOFrNMeFrB91vPXwNF0wB524DdZqRFxEaxt7xwR4asM0uO0eQ38138ceJ5fLLn1o31GAjQQdJ5X3Uw9KnE5dNwYnXZY8RWkW0gCefGE2iYkXvY3+q78lejzuLUdmxzGObYGw46fqVz8RhXFpdJgWvwjbRaGvH3p0Sajy6YPz+u0rSpo0LTwznhxG90ArGbjjuU/uwLgEke6/FVVwTwM+R+Q2z5XZdSPvREyCPQrzu0epUxZeSNQBy4LQ14i+w2+aAMLWtjiZttshqgbWVyiYYTKkzf5pVaB59SlumJBQFpn9EWxqOQp169EVN+k+v4pcfBQttp16KFpBOe3XboqyfDIOp/NA1vhm0WQGoYja8fVSy0GwzaJiyzVKcJ9Jw46zdNDM3lxUq0K+LMPdlRbjTjZWpRebOZMSoFCLFGxtpQOjAFz5Jm6UDBROqbrIzQxxRvfPoltTnM19EkB0gwLaX62Vn7sX05ImNvqR5QiBgTMn8Ovmmkc2xFKNxadvputQc2+UxAPqVmZJseGydTYWkHbQ72KyMx9NwjjMfmD8l6rsCmx7GhzqQczFYeo7O6mz9w0OFQgvIzNFpaJ2svIuaQ0ec+kcEp0uI/H3pN4oMVmz6a7EYJ7THdh4w0j7oa8OqzEf2ajYFrHLU/pWWtjcP+/qDu89OvXw7QMsPp1a+ZlUQIIYw1Wg7eG68PReGiSbTt8/elMfmcRByzPp1ZTh9l5vOD6lUxVAV6rnvYKcsawxg3jI7EgODGsBhhYQDmBeGydlhwjWBjA4UKTWYppLWuw72VWnFCQT/EbkYdfulrNgV5vsHsQ4pzwzwBjCQY+88kNYzlmdadoNk3szsF+JoOqsP7xtRrMkxLSAS7N/TmBI/lBOynFK7ZucnVI6+AxbHsYyo6k2m3E1c/gpAnD0msqMbIbmIc4OaCLuLiLqdpY1jKeLdSfQc1zKNSkAykS11RzhXa0Pbms4Hwn7rS3RR3soxlUUzXdmqPNOk4MBa4tpseXP8AFLWl1QNESd1z2di0+9DHOdlGH78kNaXR3XfFokgTqJngklF5sjlJYaPQdoOw4xQrOfS7ik17mtnDua95yMY1rMOC9zZcXQ4E+DhK5eBqtoVsUxj6RYKdV1NxFNwLg3NRyucDeHCw3EQSkP8AZum0MqPrPFGo6iKRbTaXl1YOPjaXw0NymYJJ2Wil7JAVADWOQltPMG/9d1c4dzACdG5HmdwBxUXFYssuTykdVtek/wCyl+QM7smpBwwAeaFWQW/xA/MRr4ZjeFmYcD3AaSAx1Og0OcWGox/e4jxnLqQcmYfykclyu0ew20m1HNc8FjqYOYMBcX95LvA5wAimIvPiMgLkPN4gC3mF0XjUlaZyflcXTR7PFPo+LuXUO+nEmlPdZZ+1Aj73hzd3my5ttFyu1WUvsbqZq0ziWv8AtLmtc0yXOLHMa5ngJDCx2VpmzrQvL5YNtOvoluoTobiI29bKfG0X5E+i2MIFwY46GeoWKvJPkdlrxAlomQdovwssrs1x6dcfyWl6JD2W9wAgASduutUuqfDvbqymSdz9PdqjNHNlF/hvKOWdFSKcANkmq+Gm6LEenBILZkEoyfQorsfQANj6de5IDMwgaI2s3nfo/FU4CLKCW8AtbFh67ytGGJgg6Eb8kuiYPL8U17rfHgsiS9DM5USc87qJWGjltPFOLtOSQ0IyYC4JnpaIBKoBG0WQRwWMa2aAaFEy7gOvVZmTtuiE/NNM5tG4U7Ag84VOvv66R9UpmKytiJ9OaSX5jpulyQFF9jQ8Dq605hvPvlYrZrDktTiIAET1ZWLNJFOcJjXWIQuBJsL/ACUDolVRBJ5fD1WJoc9to1tvvzV02EA7TotwaC2w21ukVADBG0/XRdONZOSleDdgu0q9BuWlUcwF7XktsXOaCBJFy258JtfRMf2nWLXtD8oc91R0AN8T2ljoLdGlriMukFZWQRrAAVBkkjolLigub0zrUfajEjM4vbmcQ7MWsLmOyCmXMJbLHFrQJHDiiw/tDV8MNpkNaKYLqNMuLA3u8jnZZc3KYgnguS2lB8Wo06KEEiI4GPzU4pdGcm9M7f8A4gxAcSCx0lkNcxjmsLBDCxpblYWjTKFnZ2tWaQ0PLmtrnECQD+9mS+/kDBtc2uuOcSQ4efujUra5gIM68fK0qpRekFuapNm7EdqOcHAlgDoc4NY1gLmF2UkNAE+N0nffQLl4gkGxknh5/JVmGbLrx2VPdHi28leiU7tltOUQdZ+PFE6o299D6aCYSaN3aTzOip7CTJHxGy1+i0ryOqASIJ5DVIqUzoNDpy31VVmiNSIWZ9YeEagA6eqEmOMX0aWNs3jBIPkeXvWOpVMzOk+S203tF9hx2EXHJYMSQ4+H1nyRlo6Q3kBtU2mwUouvO2iKo0wDG8Hz/RJrCASCubtHVJM1PaDpooQeXBKoVI3261UdcWVsNBARMje2/qqLydUDnQfFeEwCTpvPLyUstCjUPEqJefy96tSx0JaLfFU13Xmii3ogZEoDCc+NlTlbWidU3ulaslpAMGia5CWqy7q6QWCSjYDqrbMrRTcCb9WWSC2ZWfevxWwsvrb8kh9HxQFswtKR4hcae9OK6BJ4szObFh74WzC0oBvtIVViIsIMJ9N4FzYjqITjFJnOUm4jC1oAmeX05pNMS4+sev0TargSOuaQagDgmzmk6NrbA2Huj4qi+XWmSNd+p+SXUfmiD7lGuBib9G3O6Vg49lV2km/GUknaNiPiifXgxwN0bHgxF+Q+I+CjpsaTSMzsLIEG+luG6AVnaG5tyAW50wMtpI48Fzg4tc5oEiT+qElWhxfLZsoEAAkHU3vfirqVRJg2iUxkEchrrukVKM3Ij4dapO6wBU3kHCYh17R5bdXRF8GR5Tw5dcUtjoMA7cfRW5mY69cSim6G0rGveDAHlffqEDsMM2gvfTT3qUqYD/jqnPZ4vP8AEK1eyXWEY8bS0ymJFx+axOplt9wF0nN2PCPXqFzcS+8H9Fymuzr429Cqp1gyhAJmyKPDomsZ4ZnX8P0QqztdIVBsY/RbcMNRqdgk0KZM/BaqbANDxvzvwSigSlijO5guI9VMroMb7/ktppg3iw4/NZyy8zb53696riFSsyNp8wotsQopQuTOS52ygSjsmAXXE7UWBdPzDSUlhTA0xOySIyNjNboJ8iQlsponCBG6SA8hE20Vh1r3VtGgQVWmEghNq3HE/Ra2VD6WXOZYxHqtLH2MrRkSUTU541Ov4JlJ+W/wN1jDgCdkzMDadU1I5uOB2IxGa490fNZ8xt1rohc6PkFdJ7ZMXiD5ndZytlUaWDSHkenxQvqSRrb4ImEDf3qCCqAUTY2mR662T6DLgC5sZnf00VMfl2EcVG1BMAeqqM7awNqEyG8DJ/HrmsYEuLgSI46nmnugGd729IWd4M5v05qSLFGnD6E31voFVWod/wAI4deSgcC0AX3I9evcqHGJEx6K9ErNimu6AQtqA6bXPPktBANojUaJTGRpwRYk0MYYMmbifRX3l8x0HyQUjPoPdxUy7abx5K2SinYiTbo+SwuGZx9VpqOIk8eEJFF5DtNR80JO9nSKpWh9BrS0g8PjtZC58QGn6x6dXVsLYdyO/u681lFr9CFG6KlbNEkiBp+KLCvgX6lYmPdxtbqVow7wT1dRPJZRwankT8vOUDriR1eEis+4I04pgfAveytk4lepUQ5idlS1lo5hN01ombqKLijuy2tumnz64qKJBY+mRZWYkjy9FFE0c3sOo4DTb4JeYb6qKLMiBbEpzWXMaBRRZGkLL7zsmtn6KKKojCe3MIGvQQCleOSiipFoMVBIkaWTKrIMzIVqJIPoU6pfidB9UymwkbX+atRZGei3mLRKoHMBOmyiipFoAESCLQPlurpv3JO/vUUUKwBV1k7I6T9+urqKKIrSGhtzG4+aST4vgooq9BQp4kgSp3Z21NuuCiiIxZYWuM6JAfLj1CiiD2dIlvgx5KA7BRRQRpdAAG6DNOnl+KiipzWhd+Kiiiwj/9k="
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