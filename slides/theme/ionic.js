import { swiss } from 'mdx-deck/themes';
import Provider from '../layout/provider'
const theme = {
  fontWeights: {
    body: 200,
    heading: 600,
    bold: 500
  },
  fonts: {
      body: 'system-ui, sans-serif',
  },
  colors: {
    primary: '#6699cc',
  },
  styles: {
    Slide: {
      fontFamily: 'body',
    },
    Split: {
      textAlign: 'right'
    },
    h1: {
      margin: '0 0 10px'
    },
    h2: {
      margin: '0 0 10px'
    },
    h3: {
      margin: '0 0 10px'
    },
    h4: {
      margin: '0 0 10px'
    },
    h5: {
      margin: '0 0 10px'
    },
    h6: {
      margin: '0 0 10px'
    },
    p: {
      margin: '10px 0 ',
    },
    a: {
      textDecoration: 'none',
      transition: "color 0.15s ease",
      ':hover': {
        color: '#96B3F9'
      },
    },
    blockquote: {
      fontStyle: 'italic'
    },
    ul: {
      listStyle: 'none',
      paddingInlineStart: 0,
      textAlign: 'left'
    },
    li: {
      lineHeight: 2.2,
      textAlign: 'left'
    },
    img: {
      maxWidth: '100%',
    },
    root: {
      '.profile-img': {
        width: '250px',
        borderRadius: '50%',
        border: 'solid 2px rgba(217,217,217,0.7)',
      }
    }
  },
}

export default {
  ...swiss,
  ...theme,
  Provider
};
