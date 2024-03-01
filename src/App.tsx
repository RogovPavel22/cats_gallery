import { Gallery } from "./Gallery";
import { Photo } from "./Gallery/types";

const data: Photo[] = [
  {
    id: 1,
    src: "/photos/1.jpg",
    preview: "/photos/preview/1.jpg",
    description: "dcr photo",
  },
  {
    id: 2,
    src: "/photos/2.jpg",
    preview: "/photos/preview/2.jpg",
    description: "dcr photo",
  },
  {
    id: 3,
    src: "/photos/3.jpg",
    preview: "/photos/preview/3.jpg",
    description: "dcr photo",
  },
  {
    id: 4,
    src: "/photos/4.jpg",
    preview: "/photos/preview/4.jpg",
    description: "dcr photo",
  },
  {
    id: 5,
    src: "/photos/5.jpg",
    preview: "/photos/preview/5.jpg",
    description: "dcr photo",
  },
  {
    id: 6,
    src: "/photos/6.jpg",
    preview: "/photos/preview/6.jpg",
    description: "dcr photo",
  },
  {
    id: 7,
    src: "/photos/7.jpg",
    preview: "/photos/preview/7.jpg",
    description: "dcr photo",
  },
  {
    id: 8,
    src: "/photos/8.jpg",
    preview: "/photos/preview/8.jpg",
    description: "dcr photo",
  },
  {
    id: 9,
    src: "/photos/9.jpg",
    preview: "/photos/preview/9.jpg",
    description: "dcr photo",
  },
  {
    id: 10,
    src: "/photos/10.jpg",
    preview: "/photos/preview/10.jpg",
    description: "dcr photo",
  },
];

function App() {
  return (
    <div className="App">
      <Gallery photos={data} />
    </div>
  );
}

export default App;
