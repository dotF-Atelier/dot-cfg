;; -*- no-byte-compile: t; -*-
;;; h-cheung/ui/packages.el

(package! nerd-fonts
  :recipe (:host github :repo "twlz0ne/nerd-fonts.el"))
(package! all-the-icons-nerd-fonts
  :recipe (:host github :repo "mohkale/all-the-icons-nerd-fonts"))
(when IS-LINUX (package! dbus))
