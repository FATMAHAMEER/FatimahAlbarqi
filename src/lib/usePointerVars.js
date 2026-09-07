import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

/**
 * يتبع المؤشّر داخل عنصر ويكتب موضعه فيه كـ `--mx` و `--my`.
 *
 * التكلفة: متغيّران في CSS داخل requestAnimationFrame — بلا إعادة رسم React
 * وبلا canvas. يتوقّف تماماً عند تفضيل تقليل الحركة وعلى الأجهزة اللمسية،
 * فتبقى المتغيّرات على قيمها الافتراضية (منتصف العنصر) بدل أن تتجمّد في
 * زاوية عشوائية.
 */
export function usePointerVars() {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (reduce || !el) return
    // المؤشّر الدقيق فقط — على الجوال لا فائدة من التتبّع
    if (!window.matchMedia('(pointer: fine)').matches) return

    let frame = 0
    let x = 0
    let y = 0

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      x = e.clientX - rect.left
      y = e.clientY - rect.top
      if (frame) return
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${x}px`)
        el.style.setProperty('--my', `${y}px`)
        frame = 0
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [reduce])

  return ref
}
