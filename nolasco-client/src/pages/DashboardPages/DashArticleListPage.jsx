import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Stack,
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import DashArticleTable from '../../components/DashArticleTable';
import { getArticles, saveDashboardArticle } from '../../utils/articles.js';

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
  const [articles, setArticles] = useState(() => getArticles());
  const [openAddModal, setOpenAddModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    details: '',
  });
  const [errors, setErrors] = useState({});
  const normalizedArticles = Array.isArray(articles) ? articles : [];
  const totalArticles = normalizedArticles.length;
  const featuredCount = Math.min(totalArticles, 8);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
    setFormData({ title: '', image: '', details: '' });
    setErrors({});
  };

  const handleAddArticle = (event) => {
    event.preventDefault();

    const nextErrors = {};
    if (!formData.title.trim()) nextErrors.title = 'Title is required';
    if (!formData.image.trim()) nextErrors.image = 'Image URL is required';
    if (!formData.details.trim()) nextErrors.details = 'Text details are required';

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const content = formData.details
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);

    const newArticle = saveDashboardArticle({
      title: formData.title.trim(),
      image: formData.image.trim(),
      content,
    });

    setArticles((prev) => [newArticle, ...prev]);
    handleCloseAddModal();
  };

  return (
    <Box
      sx={{
        background:
          'linear-gradient(135deg, rgba(247,244,227,0.95) 0%, rgba(237,228,217,0.95) 100%)',
        padding: '24px',
        borderRadius: '12px',
        border: `2px solid ${themeColors.iron}`,
        boxShadow: 'inset 0 0 30px rgba(212,175,55,0.1)',
      }}
    >
      <StyledTitle variant="h4">
        <span>⚔ Article Registry ⚔</span>
      </StyledTitle>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }} alignItems={{ sm: 'center' }}>
        <Typography sx={{ color: themeColors.ink, flex: 1 }}>
          These dashboard records use the same article collection displayed on the public article list.
        </Typography>
        <Button
          component={Link}
          to="/articles"
          variant="contained"
          sx={{
            background: `linear-gradient(135deg, ${themeColors.gold}, #B8962E)`,
            border: `2px solid ${themeColors.gold}`,
            color: themeColors.ink,
            fontWeight: 800,
            '&:hover': {
              background: `linear-gradient(135deg, #E5C04B, ${themeColors.gold})`,
            },
          }}
        >
          Open ArticleListPage
        </Button>
      </Stack>

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

      <DashArticleTable articles={articles} onAddArticle={() => setOpenAddModal(true)} />

      <Dialog
        open={openAddModal}
        onClose={handleCloseAddModal}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            border: `2px solid ${themeColors.gold}`,
            borderRadius: '12px',
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 700,
            background: `linear-gradient(135deg, ${themeColors.gold}, #B8962E)`,
            color: themeColors.parchment,
            borderBottom: `2px solid ${themeColors.iron}`,
          }}
        >
          Add Article
        </DialogTitle>
        <form onSubmit={handleAddArticle}>
          <DialogContent sx={{ p: 4 }}>
            <Stack spacing={3}>
              <TextField
                name="title"
                label="Title"
                value={formData.title}
                onChange={handleInputChange}
                error={!!errors.title}
                helperText={errors.title}
                required
                fullWidth
              />
              <TextField
                name="image"
                label="Image URL"
                value={formData.image}
                onChange={handleInputChange}
                error={!!errors.image}
                helperText={errors.image}
                required
                fullWidth
              />
              <TextField
                name="details"
                label="Text Details"
                value={formData.details}
                onChange={handleInputChange}
                error={!!errors.details}
                helperText={errors.details || 'Use blank lines to separate paragraphs.'}
                required
                multiline
                minRows={6}
                fullWidth
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ p: 3, borderTop: `1px solid ${themeColors.iron}` }}>
            <Button onClick={handleCloseAddModal} variant="outlined">
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: `linear-gradient(135deg, ${themeColors.gold}, #B8962E)`,
                color: themeColors.ink,
                fontWeight: 800,
                '&:hover': {
                  background: `linear-gradient(135deg, #E5C04B, ${themeColors.gold})`,
                },
              }}
            >
              Save Article
            </Button>
          </DialogActions>
        </form>
      </Dialog>

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

