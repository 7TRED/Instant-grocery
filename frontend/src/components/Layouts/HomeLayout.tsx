import { useTheme } from '@mui/material/styles';
import { Grid, styled, useMediaQuery, useThemeProps } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';

type HomeLayoutProps = {
    children: React.ReactNode;
};

const ImageGrid = styled(Grid)(({ theme }) => ({
    alignItems: 'center',

    justifyContent: 'center',
    overflow: 'hidden'
}));

const ImageBox = styled(Box)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    height: '94vh',
    backgroundImage: 'url(/img/hero.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderWidth: '6px',
    borderColor: theme.palette.grey[50],
    borderStyle: 'solid'
}));

export const HomeLayout = ({ children }: HomeLayoutProps) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Grid container spacing={2} sx={{ height: '95%' }}>
            <Grid container item xs={12} md={5} alignItems="center" justifyContent={'center'}>
                {children}
            </Grid>
            {matches && (
                <ImageGrid item xs={7} alignItems="center" justifyContent={'center'}>
                    <ImageBox />
                </ImageGrid>
            )}
        </Grid>
    );
};
