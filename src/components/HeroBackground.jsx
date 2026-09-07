import { useReducedMotion } from 'motion/react'
import { usePointerVars } from '../lib/usePointerVars'

/**
 * خلفية الواجهة: وهج شفقي + حقل نقاط + بقعة ضوء تتبع المؤشّر.
 *
 * تتبّع المؤشّر نفسه يعيش في `usePointerVars` — تشاركه شبكة المهارات.
 */
export function HeroBackground() {
  const ref = usePointerVars()
  const reduce = useReducedMotion()

  return (
    <div ref={ref} className="hero-bg absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="aurora" />
      <div className="dot-field" />
      {!reduce && (
        <>
          <div className="dot-field-glow" />
          <div className="spotlight" />
        </>
      )}
      <div className="hero-fade" />
    </div>
  )
}
