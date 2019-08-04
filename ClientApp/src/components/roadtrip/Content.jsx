import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'justify'
    },
    button: {
        margin: '2%'
    }
};

const data1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales nisl vitae tristique faucibus. Morbi ut pulvinar tellus. Vestibulum massa est, luctus ut sapien non, finibus vehicula diam. Mauris eu arcu sit amet quam tristique pharetra. Nulla et metus id lorem rutrum vehicula sed quis tortor. Suspendisse id lobortis enim. Curabitur ornare, orci non ultrices ultricies, ligula risus convallis ipsum, ac sodales ante lacus at felis.

Praesent id diam arcu. Praesent pharetra blandit ligula, iaculis aliquet augue hendrerit vitae. Pellentesque eros lorem, sagittis vitae tristique non, iaculis et erat. In hac habitasse platea dictumst. Donec hendrerit magna quam, at sollicitudin tellus egestas tempor. Mauris consequat justo nibh, vitae interdum velit lacinia ut. Mauris laoreet purus in porta sagittis.`;

const data2 = `Praesent id diam arcu. Praesent pharetra blandit ligula, iaculis aliquet augue hendrerit vitae. Pellentesque eros lorem, sagittis vitae tristique non, iaculis et erat. In hac habitasse platea dictumst. Donec hendrerit magna quam, at sollicitudin tellus egestas tempor. Mauris consequat justo nibh, vitae interdum velit lacinia ut. Mauris laoreet purus in porta sagittis.

Proin at leo sit amet erat rhoncus egestas. Nullam ipsum neque, congue vitae neque ac, ullamcorper faucibus est. Cras viverra vulputate mi, vitae ultricies dolor ornare et. Morbi commodo arcu euismod, sodales lectus sit amet, venenatis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id mauris non sapien pretium dapibus. Sed vehicula dui nec nisl efficitur, eu pulvinar nulla pharetra. Ut sit amet nisi tellus. Suspendisse gravida felis quis neque vehicula imperdiet. Aenean rutrum consectetur lectus eget vulputate. Integer nec enim interdum, condimentum tortor et, volutpat elit.`;

const data3 = `Praesent arcu mauris, faucibus ac suscipit tristique, dignissim a orci. Aliquam erat volutpat. Etiam in fermentum nibh, commodo gravida metus. Vivamus a diam massa. Nulla nec ultrices lorem. Nullam tellus sapien, rutrum quis varius quis, ultrices porttitor metus. Vestibulum ornare vulputate aliquet. Nam faucibus cursus turpis, sit amet pellentesque ante luctus at. Donec ultricies tristique nisl. Mauris ac nunc sagittis, consectetur augue quis, condimentum justo.

Aliquam faucibus pharetra sem, non efficitur nisi egestas eget. Sed dignissim commodo tellus, ut gravida nisi mollis elementum. Proin eros ligula, sollicitudin vel diam sodales, pulvinar posuere dui. Proin interdum sapien quam, id aliquam nibh interdum in. Nulla viverra imperdiet odio sit amet pulvinar. Maecenas quis mollis purus. Praesent condimentum nisi ex, sed tempor tellus accumsan ac. In sit amet erat eget augue condimentum tincidunt. Duis justo nisi, interdum a euismod eu, finibus nec risus. Nulla viverra scelerisque volutpat.`;

const data4 = `Nullam euismod dapibus nunc, sed suscipit mi. Quisque hendrerit interdum tellus, eget egestas urna. Aenean et finibus elit, non euismod ex. Nam hendrerit eu nisl quis vestibulum. Vestibulum interdum commodo ex vitae eleifend. Quisque fringilla nunc nec semper porta. Aliquam quis ex vitae ipsum faucibus imperdiet. Quisque convallis nunc ut ipsum pretium, ac interdum elit finibus. Sed eget sapien nisi. Nam egestas mi cursus tortor tincidunt, id luctus tellus aliquet. Nam quis pharetra purus, vel finibus urna. Aliquam cursus pharetra lacinia.

Praesent hendrerit consectetur ligula vel sodales. Sed accumsan venenatis neque, et porta sapien laoreet in. Nulla blandit, ipsum vel hendrerit varius, leo tortor sodales lacus, at rutrum velit nunc vel ex. Sed quam magna, imperdiet ut tempus et, pretium ut nulla. Donec ut dolor sem. Nulla et posuere est, eget laoreet nulla. Donec ut vehicula orci, vel varius nibh. Aliquam nec bibendum tellus. Proin faucibus enim eget venenatis hendrerit. Nunc at scelerisque libero. Donec elementum, nunc in facilisis imperdiet, elit augue mattis erat, rhoncus luctus diam mi eu augue. Nam sed euismod leo. Donec viverra dictum sapien consequat vulputate. Morbi sagittis maximus metus in auctor.`;

const data5 = `Cras semper et neque vitae lobortis. Phasellus non tortor volutpat sem dapibus suscipit a eu neque. Suspendisse ipsum diam, volutpat ac eros vel, finibus mattis mauris. Donec fermentum ipsum sapien, at interdum ipsum elementum eget. Nulla tristique eleifend dui. Donec quam arcu, auctor sit amet diam facilisis, venenatis venenatis tortor. Mauris euismod vestibulum libero, hendrerit accumsan metus. Vivamus ligula mi, laoreet et cursus id, rutrum id velit.`;

const Content = props => {
    const { classes } = props;
    const currentProgress = props.currentProgress;

    let dataDisplay =
        <React.Fragment>
            <p>{data1}</p>
        </React.Fragment>;

    if (currentProgress === 2) {
        dataDisplay =
            <React.Fragment>
                <p>{data1}</p>
                <p>{data2}</p>
            </React.Fragment>
    };
    if (currentProgress === 3) {
        dataDisplay =
            <React.Fragment>
                <p>{data1}</p>
                <p>{data2}</p>
                <p>{data3}</p>
            </React.Fragment>
    };
    if (currentProgress === 4) {
        dataDisplay =
            <React.Fragment>
                <p>{data1}</p>
                <p>{data2}</p>
                <p>{data3}</p>
                <p>{data4}</p>
            </React.Fragment>
    };
    if (currentProgress === 5) {
        dataDisplay =
            <React.Fragment>
                <p>{data1}</p>
                <p>{data2}</p>
                <p>{data3}</p>
                <p>{data4}</p>
                <p>{data5}</p>
            </React.Fragment>
    };

    const handleSetCurrentProgress = props.handleSetCurrentProgress;

    let ButtonDisplay =
        <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={e => handleSetCurrentProgress(e)}
        >
            {`Show More`}
        </Button>;

    if (currentProgress === 5) {
        ButtonDisplay = null;
    };

    const content =
        <div className={classes.root}>
            <Typography variant="body1" gutterBottom>
                {dataDisplay}
            </Typography>

            {ButtonDisplay}
        </div>;

    return content;
};

export default withStyles(styles)(Content); 