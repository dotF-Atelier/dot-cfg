;;; h-cheung/google-c-style/config.el -*- lexical-binding: t; -*-

(set-formatter! 'clang-format
  '("clang-format"
    ("-assume-filename=%s" (or buffer-file-name mode-result ""))
    ("-style=Google"))
  :modes '((c-mode ".c")
           (c++-mode ".cpp")
           (java-mode ".java")
           (objc-mode ".m")
           (protobuf-mode ".proto")))

;; (after! lsp-clients
;;   (set-lsp-priority! 'clangd 1))

(after! c++-mode
  (map!
   :map (c++-mode-map)
   (:leader
    (:prefix ("d" . "debug")
     :desc "Run cpp in gdb"
     :n "c" #'cpp-gdb)))

  (defun cpp-gdb ()
    (interactive)
    (if buffer-file-name
        (let ((filename (file-name-sans-extension (file-name-nondirectory buffer-file-name))))
          (when (eq 0 (shell-command (concat "g++ -O2 -g -std=c++17 " buffer-file-name " -o /tmp/cpp-" filename)))
            (gdb (concat "gdb -i=mi /tmp/cpp-" filename))))
      (message "buffer-file-name is nil"))))
