"use client";

import Link from "next/link";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import WaitlistForm from "@/components/WaitlistForm";
import GoogleButton from "@/components/GoogleButton";
import WaveBackground from "@/components/WaveBackground";
import AmbientSound from "@/components/AmbientSound";

function WaitlistContent() {
    const searchParams = useSearchParams();
    const [showSuccess, setShowSuccess] = useState(false);
    const notOnWaitlist = searchParams.get("not_on_waitlist") === "true";
    const userEmail = searchParams.get("email") || "";

    return (
        <main className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
            <WaveBackground />

            <div className="relative z-10 w-full max-w-lg">
                <div className="card text-center">
                    {/* Header */}
                    <Link href="/" className="inline-block mb-6">
                        <h1 className="text-3xl font-bold">
                            <span className="text-primary">Mind</span>Acuity
                        </h1>
                    </Link>

                    {notOnWaitlist ? (
                        <>
                            {/* Not on waitlist message */}
                            <div className="mb-6 p-4 bg-secondary rounded-xl">
                                <p className="text-text-dark font-medium mb-2">
                                    You&apos;re not on the waitlist yet!
                                </p>
                                <p className="text-text-light text-sm">
                                    Please sign up with your email first, then try signing in with Google.
                                </p>
                                {userEmail && (
                                    <p className="text-text-light text-xs mt-2">
                                        Email: {userEmail}
                                    </p>
                                )}
                            </div>

                            <h2 className="text-xl font-semibold text-text-dark mb-6">
                                Join Our Early Access
                            </h2>

                            <WaitlistForm onSuccess={() => setShowSuccess(true)} />

                            {showSuccess && (
                                <div className="mt-6">
                                    <p className="text-green-600 mb-4">Now you can continue with Google!</p>
                                    <GoogleButton />
                                </div>
                            )}
                        </>
                    ) : showSuccess ? (
                        <>
                            {/* Success state */}
                            <div className="mb-6">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 text-green-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-semibold text-text-dark mb-2">
                                    You&apos;re on the list!
                                </h2>
                                <p className="text-text-light">
                                    We&apos;ll notify you when we&apos;re ready. Continue with Google to access the app.
                                </p>
                            </div>

                            <GoogleButton className="w-full justify-center" />
                        </>
                    ) : (
                        <>
                            {/* Default state */}
                            <h2 className="text-xl font-semibold text-text-dark mb-2">
                                Join the Early Access Waitlist
                            </h2>
                            <p className="text-text-light mb-6">
                                Be among the first to experience MindAcuity.
                            </p>

                            <WaitlistForm onSuccess={() => setShowSuccess(true)} />

                            <div className="mt-8 pt-6 border-t border-secondary">
                                <p className="text-text-light text-sm mb-4">
                                    Already on the waitlist?
                                </p>
                                <GoogleButton className="w-full justify-center" />
                            </div>
                        </>
                    )}

                    <p className="mt-6 text-xs text-text-light">
                        No spam. No diagnosis. Just support.
                    </p>
                </div>
            </div>

            <AmbientSound />
        </main>
    );
}

export default function WaitlistPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-text-light">Loading...</div>
            </div>
        }>
            <WaitlistContent />
        </Suspense>
    );
}
