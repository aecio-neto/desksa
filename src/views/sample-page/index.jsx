// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import PageHeader from 'ui-component/PageHeader/PageHeader';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <>
    <PageHeader
      title="Sample Page"
      breadcrumbs={[
        { label: 'Dashboard', href: '/' },
        { label: 'Sample Page', href: '/free/sample-page', color: 'text.primary' }
      ]}
    />
    <MainCard title="Card de Exemplo">
      <Typography variant="body2">
        Essa página contém uma série de experimentos e componentes do Material UI. É uma forma que posso explorar, experimentar e aprender.
      </Typography>
    </MainCard>

    <Box>
      <VerticalDividers />
    </Box>
    <Box sx={{ marginTop: 2 }}>
      <DirectionStack />
    </Box>

    {/* Abaixo uso um Subcard, que é um componente importado dos ui-component */}
    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', mt: 4 }}>
      <SubCard title="Detalhes do Produto" secondary={<Typography variant="body2">Ações</Typography>} sx={{ width: '50%' }}>
        <Typography variant="body1">Nome: Mesa de Jantar</Typography>
        <Typography variant="body1">Preço: R$ 1.200,00</Typography>
        <Typography variant="body1">Categoria: Móveis</Typography>
        <Typography variant="body1">Disponibilidade: Em Estoque</Typography>
      </SubCard>
    </Box>
  </>
);

// Importações e Exemplo de um divisor
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import Box from '@mui/material/Box';
import Divider, { dividerClasses } from '@mui/material/Divider';

export function VerticalDividers() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        bgcolor: 'background.paper',
        color: 'text.secondary',
        marginTop: 2,
        '& svg': {
          m: 1
        },
        [`& .${dividerClasses.root}`]: {
          mx: 0.5
        }
      }}
    >
      <FormatAlignLeftIcon />
      <FormatAlignCenterIcon />
      <FormatAlignRightIcon />
      <Divider orientation="vertical" variant="middle" flexItem />
      <FormatBoldIcon />
    </Box>
  );
}

// ==============================|| STACK COMPONENT ||============================== //

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// Preciso ler sobre a customização para fazer as coisas.
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027'
  })
}));

export function DirectionStack() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}

export default SamplePage;

// ==============================|| PAGE HEADER ||============================== //

// ==============================|| Da pra fazer um page Header? ||============================== //

import { Breadcrumbs, Link, Grid } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

/*  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));*/

// const PageHeader = () => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: '#fff',
//         borderRadius: 2,
//         padding: '16px',
//         borderBottom: '1px solid #e0e0e0',
//         marginBottom: '24px'
//       }}
//     >
//       <Grid container justifyContent="space-between" alignItems="center">
//         {/* Título da página */}
//         <Grid item>
//           <Typography variant="h4" fontWeight="bold">
//             Título da Página
//           </Typography>
//         </Grid>

//         {/* Breadcrumb */}
//         <Grid item>
//           <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
//             <Link underline="hover" color="inherit" href="/">
//               Dashboard
//             </Link>
//             <Link underline="hover" color="inherit" href="/orders">
//               Pedidos
//             </Link>
//           </Breadcrumbs>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export { PageHeader };
