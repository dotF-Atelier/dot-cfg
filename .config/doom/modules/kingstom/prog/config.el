;;; prog.el -*- lexical-binding: t; -*-
;;;

(setq evil-snipe-skip-leading-whitespace nil)

(add-to-list 'auto-mode-alist '("\\.inl\\'" . +cc-c-c++-objc-mode))
(add-to-list 'auto-mode-alist '("\\.inc\\'" . +cc-c-c++-objc-mode))
(remove-hook 'doom-first-input-hook #'evil-snipe-mode)
(add-hook 'prog-mode-hook #'yas-minor-mode)
(add-to-list 'auto-mode-alist '("\\.comp\\'" . glsl-mode))

(c-set-offset 'inline-open '0)
(defun vlad-cc-style()
  (c-set-style "linux")
  (c-set-offset 'innamespace '0)
  (c-set-offset 'inextern-lang '0)
  (c-set-offset 'inline-open '0)
  (c-set-offset 'label '*)
  (c-set-offset 'case-label '*)
  (c-set-offset 'access-label '/)
  (setq c-basic-offset 4)
  (setq tab-width 4)
  (setq indent-tabs-mode nil)
  )

(setq +cc-default-header-file-mode 'c++-mode)
(add-hook 'c++-mode-hook 'vlad-cc-style)

;; projectile
(setq projectile-project-root-functions '(projectile-root-local
                                          projectile-root-top-down
                                          projectile-root-top-down-recurring
                                          projectile-root-bottom-up))
(setq projectile-globally-ignored-directories '("build"))

(setq vterm-module-cmake-args "-DUSE_SYSTEM_LIBVTERM=yes")

(after! company
  (setq company-idle-delay 0.1
        company-minimum-prefix-length 1)
  (setq company-format-margin-function #'company-detect-icons-margin))

;; lsp
(setq +format-with-lsp nil)
(after! lsp-mode
  (setq lsp-enable-symbol-highlighting nil)
  (setq gc-cons-threshold (* 100 1024 1024)
        read-process-output-max (* 1024 1024)
        lsp-idle-delay 0.1)
  (setq lsp-headerline-breadcrumb-enable t
        lsp-headerline-breadcrumb-icons-enable nil
        lsp-log-io nil
        lsp-headerline-breadcrumb-segments '(file symbols)
        lsp-imenu-index-symbol-kinds '(File Module Namespace Package Class Method Enum Interface
                                       Function Variable Constant Struct Event Operator TypeParameter)
        )
  (dolist (dir '("[/\\\\]\\.ccls-cache\\'"
                 "[/\\\\]\\.mypy_cache\\'"
                 "[/\\\\]\\.pytest_cache\\'"
                 "[/\\\\]\\.cache\\'"
                 "[/\\\\]\\.clwb\\'"
                 "[/\\\\]__pycache__\\'"
                 "[/\\\\]bazel-bin\\'"
                 "[/\\\\]build$"
                 "[/\\\\]bazel-code\\'"
                 "[/\\\\]bazel-genfiles\\'"
                 "[/\\\\]bazel-out\\'"
                 "[/\\\\]bazel-testlogs\\'"
                 "[/\\\\]third_party\\'"
                 "[/\\\\]external\\'"
                 "[/\\\\]third-party\\'"
                 "[/\\\\]buildtools\\'"
                 "[/\\\\]out\\'"
                 "[/\\\\]external\\'"
                 ))
    (push dir lsp-file-watch-ignored-directories))
  (setq lsp-clients-clangd-args '(
                                  "--all-scopes-completion"
                                  "--clang-tidy"
                                  "--enable-config"
                                  "--background-index"
                                  "--completion-style=bundled"
                                  "--pch-storage=memory"
                                  "--header-insertion=never"
                                  "--header-insertion-decorators=0"
                                  ))
  )

(after! lsp-ui
  (setq lsp-ui-doc-enable nil))

(after! eglot
  :config
  (set-eglot-client! 'cc-mode '("clangd"
                                "-j=5"
                                "--all-scopes-completion"
                                "--clang-tidy"
                                "--enable-config"
                                "--background-index"
                                "--completion-style=bundled"
                                "--pch-storage=memory"
                                "--header-insertion=never"
                                "--header-insertion-decorators=0"
                                ))
  (setq eglot-ignored-server-capabilities '(:documentHighlightProvider
                                            :inlayHintProvider))
  )

(add-hook! 'vterm-mode-hook
  (defun +robbert-disable-vterm-blinking-h ()
    (blink-cursor-mode -1)))
