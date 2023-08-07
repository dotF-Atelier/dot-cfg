;;; ui.el -*- lexical-binding: t; -*-

;; ============================================
;; General UI Settings
;; ============================================

;; Set custom Doom theme, font, and title format
(setq doom-theme 'my-doom-horizon
      doom-font (font-spec :family "FantasqueSansM Nerd Font" :size 32 :weight 'normal)
      doom-variable-pitch-font (font-spec :family "sans" :size 30 :weight 'bold)
      frame-title-format '("%b – Emacs")
      icon-title-format frame-title-format)

;; Display line numbers relatively
(setq display-line-numbers-type 'relative)

;; Set NeoTree window width
(setq neo-window-width 45)

;; Control mouse and scroll behavior
(setq mouse-wheel-scroll-amount '(1 ((shift) . 3) ((control)))
      scroll-conservatively 3
      scroll-margin 3
      maximum-scroll-margin 0.2)

;; Disable scroll margin in terminal mode
(setq-hook! 'term-mode-hook scroll-margin 0)

;; Disable trailing whitespace by default
(setq-default show-trailing-whitespace nil)

;; Set popup rules for Help
(set-popup-rule! "^\\*Help" :size 0.3 :select t)


;; ============================================
;; Font and Icon Settings
;; ============================================

;; Initialize CJK fonts
(defun init-cjk-fonts ()
  "Initialize CJK fonts."
  (dolist (charset '(kana han cjk-misc bopomofo))
    (set-fontset-font (frame-parameter nil 'font) charset
                      (font-spec :family "WenQuanYi Micro Hei Mono" :size 20))))

(when (display-graphic-p)
  (add-hook 'doom-init-ui-hook #'init-cjk-fonts))

;; Set fonts for different character sets
(defun max/set-font (FONT-NAME CN-FONT-NAME &optional INITIAL-SIZE CN-FONT-RESCALE-RATIO)
  "Set different font-family for Latin and Chinese characters."
  (let ((size (or INITIAL-SIZE 24))
        (ratio (or CN-FONT-RESCALE-RATIO 0.0))
        (main (font-spec :name FONT-NAME :size size))
        (cn (font-spec :name CN-FONT-NAME)))
    (set-face-attribute 'default nil :font main)
    (dolist (charset '(kana han symbol cjk-misc bopomofo))
      (set-fontset-font t charset cn))
    (setq face-font-rescale-alist (unless (zerop ratio) `((,CN-FONT-NAME . ,ratio))))))

;; Configure icon scaling
(after! all-the-icons
  (setq inhibit-compacting-font-caches t
        all-the-icons-scale-factor 0.9))


;; ============================================
;; Whitespace and Clipboard Settings
;; ============================================

;; Enable trailing whitespace in programming, text, and configuration modes
(add-hook! (prog-mode text-mode conf-mode)
  (setq-local show-trailing-whitespace t))

;; Set interprogram cut function for non-graphic mode
(when (and (not (display-graphic-p))
           (executable-find "xclip"))
  (setq interprogram-cut-function
        (lambda (text &optional push)
          (let* ((process-connection-type nil)
                 (proc (start-process "xclip" "*Messages*" "xclip" "-i" "-selection" "clipboard")))
            (process-send-string proc text)
            (process-send-eof proc)))))

;; ============================================
;; Initialization Settings
;; ============================================

;; Set background color in non-graphic mode after initialization
(defun on-after-init ()
  "Set the background color after initialization."
  (unless (display-graphic-p (selected-frame))
    (set-face-background 'default "unspecified-bg" (selected-frame))))

(add-hook 'window-setup-hook #'on-after-init)
