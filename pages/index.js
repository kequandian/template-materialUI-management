import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Link from 'next/link';


export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          主页内容区域
        </Typography>

        <Link href="/about"><a href="">Go to the about page</a></Link>
      </Box>
    </Container>
  );
}
