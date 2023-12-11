import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

export default function Carousel(props) {
  const { name, cards } = props;

  return (
    <div className="w-full  block overflow-hidden">
      <h1 className="px-4 font-semibold">{name}</h1>
      <div className="flex items-center bg-platinum">
        <FontAwesomeIcon icon={faAngleLeft} className="h-6 text-gray"/>
          <div className="flex items-center gap-x-2 overflow-x-scroll overflow-y-hidden h-24 py-2 bg-platinum">
            {cards}
          </div>
          <FontAwesomeIcon icon={faAngleRight} className="h-6 text-gray"/>
      </div>
    </div>
  )
}

