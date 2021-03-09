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

let cardList2020 = {
    easy: [
        {
            id: 1,
            comparisonvalue: 1,
            icon: 'car',
            card_flipped: false
        },
        {
            id: 2,
            comparisonvalue: 1,
            icon: 'car',
            card_flipped: false
        },
        {
            id: 3,
            comparisonvalue: 2,
            icon: 'bus',
            card_flipped: false
        },
        {
            id: 4,
            comparisonvalue: 2,
            icon: 'bus',
            card_flipped: false
        }],
    medium: [{
        number: 1,
        icon: <AddAlertIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 1,
        icon: <AddAlertIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 2,
        icon: <FingerprintIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 2,
        icon: <FingerprintIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 3,
        icon: <AcUnitIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 3,
        icon: <AcUnitIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 4,
        icon: <AttachmentIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 4,
        icon: <AttachmentIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    }, {
        number: 5,
        icon: <AudiotrackIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 5,
        icon: <AudiotrackIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 6,
        icon: <BeachAccessIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 6,
        icon: <BeachAccessIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    }],
    hard: [{
        number: 1,
        icon: <AddAlertIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 1,
        icon: <AddAlertIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 2,
        icon: <FingerprintIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 2,
        icon: <FingerprintIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 3,
        icon: <AcUnitIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 3,
        icon: <AcUnitIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 4,
        icon: <AttachmentIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 4,
        icon: <AttachmentIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    }, {
        number: 5,
        icon: <AudiotrackIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 5,
        icon: <AudiotrackIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 6,
        icon: <BeachAccessIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 6,
        icon: <BeachAccessIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    }, {
        number: 7,
        icon: <BrightnessLowIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 7,
        icon: <BrightnessLowIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 8,
        icon: <CakeIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    },
    {
        number: 8,
        icon: <CakeIcon style={{ fontSize: picturesize, marginTop: thetopMargin }} />
    }],
};

export { cardList2020 };