# MindAcuity Frontend

Next.js App Router frontend for MindAcuity.

## Deployment (EC2 via AWS CLI)

### Prerequisites
- EC2 instance running (Amazon Linux 2/Ubuntu) with inbound 80/443 open.
- AWS CLI configured locally with access to the instance.
- Node.js 20 on the instance.

### Build and run (standalone output)
1. Build locally:
   - `npm ci`
   - `npm run build`
2. Copy build artifacts to EC2 (example with SSM session):
   - `aws ssm start-session --target i-xxxxxxxxxxxxxxxxx`
   - Upload the `.next/standalone`, `.next/static`, and `public` directories to `/opt/mindacuity-frontend`.
3. Create env file:
   - `sudo mkdir -p /etc/mindacuity`
   - `sudo nano /etc/mindacuity/frontend.env`
   - Set `NEXT_PUBLIC_API_URL=https://api.example.com`
4. Install service + start:
   - `sudo cp deploy/mindacuity-frontend.service /etc/systemd/system/`
   - `sudo systemctl daemon-reload`
   - `sudo systemctl enable --now mindacuity-frontend`
5. Configure Nginx:
   - `sudo cp deploy/nginx.conf /etc/nginx/conf.d/mindacuity-frontend.conf`
   - Update `server_name` and reload: `sudo systemctl reload nginx`

### Notes
- The service expects `server.js` at `/opt/mindacuity-frontend/server.js` from Next.js standalone output.
- If you deploy directly on EC2, run `npm ci && npm run build` on the instance instead of copying artifacts.
