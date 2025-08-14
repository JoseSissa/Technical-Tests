import app from "./app.ts";
import { config } from "./utils/config.ts";

app.listen(config.PORT, () => {
  console.log(
    `Server running on port http://localhost:${config.PORT}/api/v1/tasks`
  );
});
