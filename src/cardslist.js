import AddAlertIcon from '@material-ui/icons/AddAlert';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AttachmentIcon from '@material-ui/icons/Attachment';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import CakeIcon from '@material-ui/icons/Cake';

const picturesize = 80;
const thetopMargin = '27px';

let cardListEasy = [
    {
        id: 1,
        comparisonvalue: 1,
        icon: <img src={'/images/bob.png'} width={'90px'} height={'130px'} />,
        card_flipped: false
    },
    {
        id: 2,
        comparisonvalue: 1,
        icon: <img src={'/images/bob.png'} width={'90px'} height={'130px'} />,
        card_flipped: false
    },
    {
        id: 3,
        comparisonvalue: 2,
        icon: <img src={'/images/tina.png'} width={'90px'} height={'130px'} />,
        card_flipped: false
    },
    {
        id: 4,
        comparisonvalue: 2,
        icon: <img src={'/images/tina.png'} width={'90px'} height={'130px'} />,
        card_flipped: false
    },
    {
        id: 5,
        comparisonvalue: 3,
        icon: <img src={'/images/linda.png'} width={'90px'} height={'130px'} />,
        card_flipped: false
    },
    {
        id: 6,
        comparisonvalue: 3,
        icon: <img src={'/images/linda.png'} width={'90px'} height={'130px'} />,
        card_flipped: false
    },
    {
        id: 7,
        comparisonvalue: 4,
        icon: <img src={'/images/gene.png'} width={'90px'} height={'130px'} />,
        card_flipped: false
    },
    {
        id: 8,
        comparisonvalue: 4,
        icon: <img src={'/images/gene.png'} width={'90px'} height={'130px'} />,
        card_flipped: false
    }];

let cardListMed = [
    {
        id: 9,
        comparisonvalue: 1,
        icon: <AddAlertIcon />,
        card_flipped: false
    },
    {
        id: 10,
        comparisonvalue: 1,
        icon: <AddAlertIcon />,
        card_flipped: false
    },
    {
        id: 11,
        comparisonvalue: 2,
        icon: <FingerprintIcon />,
        card_flipped: false
    },
    {
        id: 12,
        comparisonvalue: 2,
        icon: <FingerprintIcon />,
        card_flipped: false
    },
    {
        id: 13,
        comparisonvalue: 3,
        icon: <AttachmentIcon />,
        card_flipped: false
    },
    {
        id: 14,
        comparisonvalue: 3,
        icon: <AttachmentIcon />,
        card_flipped: false
    },
    {
        id: 15,
        comparisonvalue: 4,
        icon: <AcUnitIcon />,
        card_flipped: false
    },
    {
        id: 16,
        comparisonvalue: 4,
        icon: <AcUnitIcon />,
        card_flipped: false
    },
    {
        id: 17,
        comparisonvalue: 5,
        icon: <AttachmentIcon />,
        card_flipped: false
    },
    {
        id: 18,
        comparisonvalue: 5,
        icon: <AcUnitIcon />,
        card_flipped: false
    },
    {
        id: 19,
        comparisonvalue: 6,
        icon: <AcUnitIcon />,
        card_flipped: false
    },
    {
        id: 20,
        comparisonvalue: 6,
        icon: <AcUnitIcon />,
        card_flipped: false
    }];

let cardListHard = [
    {
        id: 21,
        comparisonvalue: 1,
        icon: <AddAlertIcon />,
        card_flipped: false
    },
    {
        id: 22,
        comparisonvalue: 1,
        icon: <AddAlertIcon />,
        card_flipped: false
    },
    {
        id: 23,
        comparisonvalue: 2,
        icon: <FingerprintIcon />,
        card_flipped: false
    },
    {
        id: 24,
        comparisonvalue: 2,
        icon: <FingerprintIcon />,
        card_flipped: false
    },
    {
        id: 25,
        comparisonvalue: 1,
        icon: <AttachmentIcon />,
        card_flipped: false
    },
    {
        id: 26,
        comparisonvalue: 1,
        icon: <AttachmentIcon />,
        card_flipped: false
    },
    {
        id: 27,
        comparisonvalue: 2,
        icon: <AcUnitIcon />,
        card_flipped: false
    },
    {
        id: 28,
        comparisonvalue: 2,
        icon: <AcUnitIcon />,
        card_flipped: false
    },
    {
        id: 29,
        comparisonvalue: 2,
        icon: <FingerprintIcon />,
        card_flipped: false
    },
    {
        id: 30,
        comparisonvalue: 2,
        icon: <FingerprintIcon />,
        card_flipped: false
    },
    {
        id: 31,
        comparisonvalue: 1,
        icon: <AttachmentIcon />,
        card_flipped: false
    },
    {
        id: 32,
        comparisonvalue: 1,
        icon: <AttachmentIcon />,
        card_flipped: false
    },
    {
        id: 33,
        comparisonvalue: 2,
        icon: <AcUnitIcon />,
        card_flipped: false
    },
    {
        id: 34,
        comparisonvalue: 2,
        icon: <AcUnitIcon />,
        card_flipped: false
    }];

export { cardListEasy, cardListMed, cardListHard };