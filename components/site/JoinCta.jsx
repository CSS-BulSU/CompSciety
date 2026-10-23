import Link from "next/link";
import { SIGNUP_FORM } from "@/lib/content/site";

export default function JoinCta({ withSteps = true }) {
  return (
    <div className="cta glass">
      <div>
        <span className="mono">$ compsciety join --as cster</span>
        <h2>
          Ready to <span className="grad-text">connect?</span>
        </h2>
        <p>Any BulSUan can join, whatever your college or course. Sign up, attend onboarding and you&apos;re in.</p>
      </div>
      <div className="cta-actions">
        <a className="btn btn-primary" href={SIGNUP_FORM} target="_blank" rel="noopener noreferrer">
          Fill out the sign-up form <span aria-hidden="true">→</span>
        </a>
        {withSteps && (
          <Link className="link" href="/get-involved#joining">
            How joining works <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
