;;; key.el -*- lexical-binding: t; -*-

;; key binding
(define-key evil-insert-state-map (kbd "C-h") 'delete-backward-char)

(setq evil-escape-key-sequence nil
      evil-ex-substitute-global nil
      +evil-want-o/O-to-continue-comments nil)

(setq-default evil-symbol-word-search t)
