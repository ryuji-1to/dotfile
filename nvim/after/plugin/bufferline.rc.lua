local status, bufferline = pcall(require, 'bufferline')
if (not status) then return end

local colors = require('dracula').colors()

bufferline.setup {
  options = {
    mode = 'tabs',
    always_show_bufferline = false,
    show_buffer_close_icons = false,
    show_close_icon = false,
    color_icons = true
  },
  highlights = {
    separator = {
      fg = colors.fg,
      bg = colors.bg
    },
    separator_selected = {
      fg = colors.orange
    },
    background = {
      fg = colors.fg,
      bg = colors.bg
    },
    buffer_selected = {
      fg = colors.orange,
      bg = colors.comment,
      bold = true,
    },
    fill = {
      bg = colors.bright_green
    }
  }
}

vim.api.nvim_set_keymap('n', '<Tab>', '<cmd>BufferLineCycleNext<cr>', {})
vim.api.nvim_set_keymap('n', '<S-Tab>', '<cmd>BufferLineCyclePrev<cr>', {})
