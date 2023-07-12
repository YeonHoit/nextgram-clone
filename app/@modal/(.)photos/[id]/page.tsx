import Modal from "@/components/Modal/Modal";
import swagPhotos, { Photo } from "../../../../util/photos";
import Frame from "@/components/frame/Frame";

export default function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
  const photos = swagPhotos;
  const photo: Photo = photos.find((item: Photo) => item.id === photoId)!;

  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  );
}
