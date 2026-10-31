import { createApp } from '@/app';
import { getPort } from '@/config/env';

const app = createApp();
const port = getPort();

app.listen(port, () => {
  console.log(`API ouvindo na porta ${port}`);
});
