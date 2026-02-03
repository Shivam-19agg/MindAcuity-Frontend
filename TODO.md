# Frontend Developer TODO (MindAcuity-Frontend)

> **Focus**: UX/UI, Realtime Safety, PWA Compliance.
> **Stack**: React 18, Vite, Tailwind CSS, Zustand, WebSocket.

---

## 🎨 Epic 1: Project Setup & Design System
- [ ] **Vite Initialization**: Setup project with `react-ts` template and configure aliases (`@/components`, `@/lib`).
- [ ] **Tailwind Configuration**: Setup `tailwind.config.js` with the MindAcuity brand colors (Calming Blues/Teals).
- [ ] **Global Overlay**: Create the `EmergencyOverlay` component that sits at `zIndex: 9999` and conditionally renders based on `useSafetyStore`.
- [ ] **Consent Modal**: Build the DPDP-compliant "Non-Medical Disclaimer" modal that blocks app usage until accepted.

## 🔑 Epic 2: Authentication & Context
- [ ] **Auth Store**: Implement `useAuthStore` (Zustand) to persist JWT tokens and User State.
- [ ] **Login Page**: Create a clean interface with "Continue with Google" button (redirects to Backend API).
- [ ] **Guest Mode**: Implement logic to handle Anonymous Session IDs (UUID storage in `sessionStorage`).

## 💬 Epic 3: Chat Interface
- [ ] **Chat Layout**: Build a responsive Grid layout (Sidebar for History [Desktop] + Main Chat Area).
- [ ] **Message Bubble**: Create a flexible component handling:
    - Text Content
    - Timestamp
    - Sender (User vs AI)
    - Status (Sending, Sent, Error)
- [ ] **Input Bar**: Auto-expanding textarea with character count limits (500 chars).
- [ ] **WebSocket Hook**: Implement a custom hook `useChatSocket` that connects on mount and handles re-connection logic.

## 🛑 Epic 4: Safety & Feedback
- [ ] **Tier Handling**: Listen for `safety.tier_update` socket events.
    - *Tier 0-1*: Normal UI.
    - *Tier 2*: Show Toast Warning ("Voice disabled due to safety tier").
    - *Tier 3*: Trigger Global Emergency Overlay.
- [ ] **Disconnection UI**: Show a visible banner when WebSocket disconnects.

## 🎙️ Epic 5: Voice Interaction (Auth Only)
- [ ] **Microphone Permission**: Create a robust permission request flow (try/catch `navigator.mediaDevices`).
- [ ] **Recorder**: Implement `MediaRecorder` logic to capture chunks and send Blob to Backend.
- [ ] **Visualizer**: (Bonus) Simple Canvas-based audio wave or pulsing circle during active recording.

## ✅ Verification
- [ ] Verify Mobile Responsiveness (Chrome DevTools Mobile View).
- [ ] Run `npm run lint` to ensure code quality.
