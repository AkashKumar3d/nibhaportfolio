import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const SuccessPopup = ({ message = "Action completed successfully!", show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-5 right-5 z-50"
        >
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl shadow-lg flex items-center space-x-3">
            <CheckCircle className="text-green-600 w-6 h-6" />
            <div className="text-sm font-medium">{message}</div>
            <button onClick={onClose} className="text-green-600 ml-2 hover:text-green-800 text-sm">×</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessPopup;
