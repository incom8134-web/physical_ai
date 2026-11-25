import { useEffect, useRef, useState } from 'react';
import { asset } from './asset';

/**
 * Looping, muted background video for the hero. Visitors who ask the OS for
 * reduced motion get the static diagram instead, and the video pauses while
 * the hero is scrolled out of view so it isn't decoding off-screen.
 */
export function HeroBackground() {
  const ref = useRef<HTMLVideoElement>(null);
  const [allowMotion] = useState(
    () =>
      typeof window === 'undefined' ||
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Autoplay is only permitted while muted; set it as a property too, since
    // React does not always reflect `muted` onto the element in time.
    v.muted = true;
    v.defaultMuted = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.05 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [allowMotion]);

  const layer: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  };

  if (!allowMotion) {
    return (
      <div
        aria-hidden
        style={{
          ...layer,
          backgroundImage: `url(${asset('images/hero-bg.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 68%',
          opacity: 0.4,
        }}
      />
    );
  }

  return (
    <video
      ref={ref}
      aria-hidden
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={asset('video/hero-loop-poster.jpg')}
      style={{ ...layer, objectFit: 'cover', objectPosition: 'center center', opacity: 0.85 }}
    >
      {/* WebM first (smaller; also plays in Chromium builds without H.264), MP4 for Safari/older browsers */}
      <source src={asset('video/hero-loop.webm')} type="video/webm" />
      <source src={asset('video/hero-loop.mp4')} type="video/mp4" />
    </video>
  );
}

// Company intro film in the services section. It starts muted (browsers only
// autoplay silent video) and plays while on screen; the viewer can turn the
// sound on or pause it.
export function IntroVideo({
  labels,
  large,
}: {
  labels: { title: string; soundOn: string; soundOff: string; play: string; pause: string };
  large?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  // Paused by the viewer: don't restart it when it scrolls back into view.
  const userPaused = useRef(false);
  const [allowMotion] = useState(
    () =>
      typeof window === 'undefined' ||
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (allowMotion && !userPaused.current) v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [allowMotion]);

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    // Turning the sound on is a request to hear it, so start playback too.
    if (!v.muted && v.paused) {
      userPaused.current = false;
      v.play().catch(() => {});
    }
  };

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play().catch(() => {});
    } else {
      userPaused.current = true;
      v.pause();
    }
  };

  // Sizes live in index.css (.video-ctrl): the large variant only grows from tablet width up.
  const ctrl = `video-ctrl${large ? ' video-ctrl-lg' : ''}`;

  return (
    <div className="card" style={{ padding: large ? '0.75rem' : '0.6rem', overflow: 'hidden' }}>
      <div
        style={{
          position: 'relative',
          aspectRatio: '16 / 9',
          borderRadius: large ? 12 : 10,
          overflow: 'hidden',
          background: '#eef2f8',
        }}
      >
        <video
          ref={ref}
          muted
          loop
          playsInline
          preload="metadata"
          poster={asset('video/haebot-intro-poster.jpg')}
          aria-label={labels.title}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        >
          {/* WebM first (also plays in Chromium builds without H.264), MP4 for Safari */}
          <source src={asset('video/haebot-intro.webm')} type="video/webm" />
          <source src={asset('video/haebot-intro.mp4')} type="video/mp4" />
        </video>
        <div className={`video-ctrls${large ? ' video-ctrls-lg' : ''}`}>
          <button
            type="button"
            onClick={togglePlay}
            className={ctrl}
            aria-label={playing ? labels.pause : labels.play}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              {playing ? (
                <>
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </>
              ) : (
                <path d="M8 5v14l11-7z" />
              )}
            </svg>
          </button>
          <button type="button" onClick={toggleSound} className={ctrl} aria-pressed={!muted}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M11 5L6 9H3v6h3l5 4V5z" fill="currentColor" />
              {muted ? (
                <>
                  <path d="M22 9l-6 6" />
                  <path d="M16 9l6 6" />
                </>
              ) : (
                <>
                  <path d="M15.5 8.5a5 5 0 010 7" />
                  <path d="M18.5 5.5a9 9 0 010 13" />
                </>
              )}
            </svg>
            {muted ? labels.soundOn : labels.soundOff}
          </button>
        </div>
      </div>
    </div>
  );
}
