local status, bufferline = pcall(require, 'bufferline')
if (not status) then return end

local colors = require('dracula').colors()

bufferline.setup {
  options = {
    mode = 'tabs',
    always_show_bufferline = false,
    show_buffer_close_icons = false,
    show_close_icon = false,
    color_icons = true,
    diagnostics = 'nvim_lsp',
    diagnostics_indicator = function(count, level, diagnostics_dict, context)
      local s = " "
      for e, n in pairs(diagnostics_dict) do
        local sym = e == "error" and " "
            or (e == "warning" and " " or "")
        s = s .. n .. sym
      end
      return s
    end
  },
  highlights = {
    separator = {
      -- fg = colors.fg,
      -- bg = colors.orange,
    },
    -- separator_selected = {
    --   fg = colors.orange,
    -- },
    fill = {
      -- bg = colors.orange,
      -- fg = colors.fg
    },
    background = {
      fg = colors.comment,
      bg = colors.bg
    },
    buffer_selected = {
      fg = colors.purple,
      -- bg = colors.comment,
    },
    error_selected = {
      bold = true,
    },
    error_diagnostic_selected = {
      bold = true
    },
    info_selected = {
      bold = true,
    },
    info_diagnostic_selected = {
      bold = true,
    },
    warning_selected = {
      bold = true
    },
    warning_diagnostic_selected = {
      bold = true
    },
  }
}

vim.api.nvim_set_keymap('n', '<Tab>', '<cmd>BufferLineCycleNext<cr>', {})
vim.api.nvim_set_keymap('n', '<S-Tab>', '<cmd>BufferLineCyclePrev<cr>', {})
