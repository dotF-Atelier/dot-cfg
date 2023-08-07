;; -*- no-byte-compile: t; -*-
;;; completion/corfu/packages.el

(package! corfu
  :recipe (:files (:defaults "extensions/*.el")))
(when (featurep! +icons)
  (package! kind-icon))
(when (featurep! +orderless)
  (package! orderless))
(package! cape)
(package! popon
  :recipe (:type git :repo "https://codeberg.org/akib/emacs-popon"))
(package! corfu-terminal
  :recipe (:type git :repo "https://codeberg.org/akib/emacs-corfu-terminal.git"))
(package! corfu-doc-terminal
  :recipe (:type git :repo "https://codeberg.org/akib/emacs-corfu-doc-terminal.git"))
