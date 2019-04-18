import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2%',
        fontFamily: `'Bungee Inline', cursive`,
        fontSize: '4vh',
        textAlign: 'center'
    },
});

class GetBlogPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('/api/getblog?id=0')
            .then(res => res.json())
            .then(myJson => this.setState({ data: myJson }))
    }

    render() {
        const { classes } = this.props;
        const body = this.state.data.blogContent;
        const title = this.state.data.blogTitle;
        const date = this.state.data.publishDate
        var html = { __html: body };

        return (
            <div>
                <div className={classes.title}>
                    {title}
                </div>
                <Typography variant="caption" gutterBottom align="center">
                    {date}
                </Typography>
                <div dangerouslySetInnerHTML={html} style={{ fontFamily: `font-family: 'Roboto', sans-serif` }} />
            </div>
        )
    }
}

export default withStyles(styles)(GetBlogPosts); 