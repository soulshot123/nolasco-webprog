import React from 'react';
import { Box, Stack, Card, CardContent, Typography } from '@mui/material';
import DashArticleTable from '../../components/DashArticleTable';
import articles from '../../assets/data/article-content.js';

// Medieval Knight Theme Colors (kept consistent with UsersPage)
const themeColors = {
  gold: '#D4AF37',
  silver: '#C0C0C0',
  iron: '#4A5568',
  steel: '#2D3748',
  parchment: '#F7F4E3',
  ink: '#2D1B0F',
  velvet: '#1A0D00',
  success: '#2E7D32',
  error: '#C62828',
};

const StyledCard = ({ children, goldAccent, ...props }) => (
  <Card
    {...props}
    sx={{
      background: 'linear-gradient(145deg, #F7F4E3, #EDE4D9)',
      border: `2px solid ${themeColors.iron}`,
      borderRadius: '8px',
      position: 'relative',
      overflow: 'visible',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-2px',
        left: '-2px',
        right: '-2px',
        bottom: '-2px',
        borderRadius: '10px',
        border: goldAccent ? `2px solid ${themeColors.gold}` : 'none',
        pointerEvents: 'none',
      },
      ...props.sx,
    }}
  >
    <CardContent>{children}</CardContent>
  </Card>
);

const StyledTitle = ({ children, ...props }) => (
  <Typography
    {...props}
    sx={{
      fontFamily: "'Cinzel', serif",
      fontWeight: 700,
      color: themeColors.ink,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      borderBottom: `2px solid ${themeColors.gold}`,
      paddingBottom: '8px',
      marginBottom: '16px',
      display: 'inline-block',
      ...props.sx,
    }}
  >
    {children}
  </Typography>
);

const StatValue = ({ children, ...props }) => (
  <Typography
    variant="h3"
    {...props}
    sx={{
      fontFamily: "'Cinzel', serif",
      fontWeight: 700,
      color: themeColors.gold,
      textShadow: '0 2px 4px rgba(0,0,0,0.2)',
      ...props.sx,
    }}
  >
    {children}
  </Typography>
);

const StatLabel = ({ children, ...props }) => (
  <Typography
    variant="overline"
    {...props}
    sx={{
      fontFamily: "'Cinzel', serif",
      fontWeight: 600,
      letterSpacing: '0.15em',
      color: themeColors.iron,
      ...props.sx,
    }}
  >
    {children}
  </Typography>
);

function DashArticleListPage() {
  const totalArticles = articles?.length ?? 0;
  const featuredCount = Math.min(totalArticles, 8);

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, rgba(247,244,227,0.95) 0%, rgba(237,228,217,0.95) 100%)',
        padding: '24px',
        borderRadius: '12px',
        border: `2px solid ${themeColors.iron}`,
        boxShadow: 'inset 0 0 30px rgba(212,175,55,0.1)',
      }}
    >
      <StyledTitle variant="h4">📜 Article Library 📜</StyledTitle>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 4 }}>
        <StyledCard sx={{ flex: 1, minWidth: 150 }} goldAccent>
          <CardContent>
            <StatLabel>Total Articles</StatLabel>
            <StatValue>{totalArticles}</StatValue>
          </CardContent>
        </StyledCard>

        <StyledCard sx={{ flex: 1, minWidth: 150 }}>
          <CardContent>
            <StatLabel>Featured Grid</StatLabel>
            <StatValue>{featuredCount}</StatValue>
          </CardContent>
        </StyledCard>

        <StyledCard sx={{ flex: 1, minWidth: 150 }}>
          <CardContent>
            <StatLabel>Guild Status</StatLabel>
            <StatValue>Active</StatValue>
          </CardContent>
        </StyledCard>

        <StyledCard sx={{ flex: 1, minWidth: 150 }}>
          <CardContent>
            <StatLabel>Archive Ready</StatLabel>
            <StatValue>{totalArticles > 0 ? 'Yes' : 'No'}</StatValue>
          </CardContent>
        </StyledCard>
      </Stack>

      <DashArticleTable articles={articles} />

      <Box
        sx={{
          textAlign: 'center',
          mt: 4,
          pt: 2,
          borderTop: `1px solid ${themeColors.silver}`,
        }}
      >
        <Typography
          sx={{
            fontFamily: "'MedievalSharp', cursive",
            color: themeColors.gold,
            fontSize: '1.2em',
            letterSpacing: '0.2em',
          }}
        >
          ⚜ Honor • Courage • Faith ⚜
        </Typography>
      </Box>
    </Box>
  );
}

export default DashArticleListPage;



