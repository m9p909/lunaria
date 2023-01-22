import { useAutoAnimate } from "@formkit/auto-animate/react"



const useTypesafeAnimate = () => {

  const [parent, enableAnimation] = useAutoAnimate()
  return [parent  as React.RefObject<HTMLDivElement>, enableAnimation]
}

export {useTypesafeAnimate}