import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificates: string[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export default function CertificateModal({
  isOpen,
  onClose,
  certificates,
  currentIndex,
  setCurrentIndex,
}: CertificateModalProps) {
  if (!isOpen) return null;

  const prev = () => {
    setCurrentIndex(
      currentIndex === 0
        ? certificates.length - 1
        : currentIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex(
      currentIndex === certificates.length - 1
        ? 0
        : currentIndex + 1
    );
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white"
      >
        <X size={32} />
      </button>

      {/* Previous */}
      {certificates.length > 1 && (
        <button
          onClick={prev}
          className="absolute left-5 text-white"
        >
          <ChevronLeft size={40} />
        </button>
      )}

      {/* Image */}
      <img
        src={certificates[currentIndex]}
        alt="certificate"
        className="max-h-[90vh] max-w-[90vw] rounded-lg"
      />

      {/* Next */}
      {certificates.length > 1 && (
        <button
          onClick={next}
          className="absolute right-5 text-white"
        >
          <ChevronRight size={40} />
        </button>
      )}
    </div>
  );
}