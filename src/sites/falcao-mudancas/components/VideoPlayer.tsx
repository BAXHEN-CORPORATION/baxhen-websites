'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, VolumeX } from 'lucide-react'
import { c, VIDEO } from '../config'

export const VideoPlayer = () => {
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    vid.addEventListener('play', onPlay)
    vid.addEventListener('pause', onPause)
    return () => { vid.removeEventListener('play', onPlay); vid.removeEventListener('pause', onPause) }
  }, [])

  useEffect(() => {
    return () => clearTimeout(hideTimer.current)
  }, [])

  const handleInteraction = () => {
    clearTimeout(hideTimer.current)
    setShowControls(true)
    hideTimer.current = setTimeout(() => setShowControls(false), 3000)
  }

  const handleClick = () => {
    handleInteraction()
    const vid = videoRef.current
    if (!vid) return
    if (muted) { vid.currentTime = 0; vid.muted = false; setMuted(false); vid.play() }
    else { if (vid.paused) vid.play(); else vid.pause() }
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl" style={{ backgroundColor: c.videoBg }}
      onMouseMove={handleInteraction} onTouchStart={handleInteraction} onClick={handleClick}>
      <video ref={videoRef} className="w-full h-full object-cover cursor-pointer" autoPlay loop muted playsInline src={VIDEO} />
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${showControls || muted || !playing ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: !playing || muted ? 'rgba(0,0,0,0.2)' : 'transparent' }}>
        {muted && <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}><VolumeX size={32} color={c.primary} /></div>}
        {!muted && !playing && <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}><Play size={32} color={c.primary} className="ml-1" /></div>}
        {!muted && playing && showControls && <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}><Pause size={32} color={c.primary} /></div>}
      </div>
    </div>
  )
}
