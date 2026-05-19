import React, { useMemo, useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Chip,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';

const themeColors = {
  gold: '#D4AF37',
  silver: '#C0C0C0',
  iron: '#4A5568',
  steel: '#2D3748',
  parchment: '#F7F4E3',
  ink: '#2D1B0F',
};

const slugifyPreview = (s) => String(s ?? '').trim().replace(/\s+/g, '-').toLowerCase();

function DashArticleTable({ articles }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [pageSize, setPageSize] = useState(10);

  // GUI-only row actions
  const [disabledSlugs, setDisabledSlugs] = useState(() => new Set());

  const rows = useMemo(() => {
    const base = Array.isArray(articles) ? articles : [];

    return base.map((a, idx) => {
      const slug = a?.name ?? slugifyPreview(a?.title);
      const content = Array.isArray(a?.content) ? a.content : [];
      const paragraphs = content.length;
      const preview = content?.[0] ? `${content[0].slice(0, 120)}${content[0].length > 120 ? '…' : ''}` : '—';

      const isActive = !disabledSlugs.has(slug);

      return {
        id: idx + 1,
        slug,
        title: a?.title ?? 'Untitled',
        paragraphs,
        preview,
        status: isActive ? 'Active' : 'Inactive',
        isActive,
        _rawIndex: idx,
      };
    });
  }, [articles, disabledSlugs]);

  const filteredRows = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return rows.filter((r) => {
      const matchesSearch =
        !term ||
        r.id.toString().includes(term) ||
        r.slug.toLowerCase().includes(term) ||
        r.title.toLowerCase().includes(term) ||
        r.preview.toLowerCase().includes(term);

      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'active' && r.status === 'Active') ||
        (statusFilter === 'inactive' && r.status === 'Inactive');

      return matchesSearch && matchesStatus;
    });
  }, [rows, searchTerm, statusFilter]);

  const columns = useMemo(
    () => [
      {
        field: 'id',
        headerName: 'ID',
        width: 70,
      },
      {
        field: 'slug',
        headerName: 'Slug',
        width: 180,
      },
      {
        field: 'title',
        headerName: 'Title',
        minWidth: 260,
        flex: 1,
      },
      {
        field: 'paragraphs',
        headerName: 'Paragraphs',
        width: 130,
      },
      {
        field: 'preview',
        headerName: 'Preview',
        minWidth: 260,
        flex: 1,
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 130,
        renderCell: (params) => (
          <Chip
            label={params.value}
            size="small"
            sx={{
              fontWeight: 700,
              backgroundColor: params.value === 'Active' ? `${themeColors.gold}33` : `${themeColors.silver}55`,
              color: themeColors.ink,
              border: `1px solid ${params.value === 'Active' ? themeColors.gold : themeColors.silver}`,
            }}
          />
        ),
      },
      {
        field: 'actions',
        headerName: 'Actions',
        width: 160,
        sortable: false,
        filterable: false,
        renderCell: (params) => {
          const slug = params.row.slug;
          const isActive = params.row.isActive;

          return (
            <Stack direction="row" spacing={1}>
              <Button
                variant="outlined"
                size="small"
                startIcon={<EditIcon />}
                sx={{
                  borderColor: themeColors.iron,
                  color: themeColors.ink,
                }}
                onClick={() => {
                  // GUI-only: hook your edit modal here later
                  console.log('Edit article:', slug);
                }}
              >
                Edit
              </Button>

              <Button
                variant="outlined"
                size="small"
                startIcon={<BlockIcon />}
                sx={{
                  borderColor: themeColors.iron,
                  color: themeColors.ink,
                  opacity: 0.95,
                }}
                onClick={() => {
                  setDisabledSlugs((prev) => {
                    const next = new Set(prev);
                    if (isActive) next.add(slug);
                    else next.delete(slug);
                    return next;
                  });
                }}
              >
                {isActive ? 'Disable' : 'Enable'}
              </Button>
            </Stack>
          );
        },
      },
    ],
    []
  );

  return (
    <Box
      sx={{
        border: `2px solid ${themeColors.gold}`,
        borderRadius: '12px',
        backgroundColor: 'rgba(247,244,227,0.95)',
        p: 2,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ flexWrap: 'wrap', mb: 2 }}
      >
        <TextField
          size="small"
          label="Search articles"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ minWidth: 300, flex: 1 }}
        />

        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={statusFilter}
            label="Status"
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ flex: 1 }} />

        <Button
          variant="contained"
          sx={{
            background: `linear-gradient(135deg, ${themeColors.gold}, #B8962E)`,
            border: `2px solid ${themeColors.gold}`,
            '&:hover': {
              background: `linear-gradient(135deg, #E5C04B, ${themeColors.gold})`,
            },
            fontWeight: 800,
          }}
          onClick={() => {
            // GUI-only: hook create modal here
            console.log('Add article');
          }}
        >
          Add Article
        </Button>
      </Stack>

      <Box
        sx={{
          height: 560,
          width: '100%',
          border: `2px solid ${themeColors.iron}`,
          borderRadius: '10px',
          overflow: 'hidden',
          backgroundColor: 'rgba(247,244,227,0.95)',
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            background: `linear-gradient(135deg, ${themeColors.gold}, #B8962E)`,
            borderBottom: `2px solid ${themeColors.iron}`,
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontFamily: "'Cinzel', serif",
            fontWeight: 900,
            color: themeColors.ink,
          },
          '& .MuiDataGrid-cell': {
            borderColor: `${themeColors.silver}50`,
          },
        }}
      >
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSizeOptions={[10]}
          pagination
          paginationMode="client"
          pageSize={pageSize}
          onPageSizeChange={(v) => setPageSize(v)}
          rowsPerPageOptions={[10]}
          disableRowSelectionOnClick
        />
      </Box>

      <Typography sx={{ mt: 1, color: themeColors.ink, opacity: 0.75 }}>
        Rows per page: 10
      </Typography>
    </Box>
  );
}

export default DashArticleTable;

