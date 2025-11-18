
import { useState, useCallback, useEffect } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
}

let toastListeners: Array<(toast: ToastMessage) => void> = [];

const generateToastId = () => `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export const toast = {
  success: (message: string) => {
    const id = generateToastId();
    toastListeners.forEach((listener) =>
      listener({ id, type: 'success', message })
    );
  },
  error: (message: string) => {
    const id = generateToastId();
    toastListeners.forEach((listener) =>
      listener({ id, type: 'error', message })
    );
  },
  info: (message: string) => {
    const id = generateToastId();
    toastListeners.forEach((listener) =>
      listener({ id, type: 'info', message })
    );
  },
};

export function useToast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((toast: ToastMessage) => {
    setToasts((prev) => [...prev, toast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toast.id));
    }, 3000);
  }, []);

  useEffect(() => {
    toastListeners.push(addToast);
    return () => {
      toastListeners = toastListeners.filter((l) => l !== addToast);
    };
  }, [addToast]);

  return { toasts };
}