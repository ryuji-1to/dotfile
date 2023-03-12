if status is-interactive
    # Commands to run in interactive sessions can go here
end

alias vi="nvim"
alias ..="cd ../"
alias home="cd ~"
alias c="clear"
alias cat="bat"
alias md="mkdir"
alias ya="yarn add"
alias yad="yarn add -D"
alias yr="yarn remove"
alias ga="git add"
alias gbd="git branch -d"
alias gb='git branch'
alias gcm='git commit -m'
alias gm='gitmoji -c'
alias gca="git commit --amend"
alias gc="git checkout"
alias gcb="git checkout -b"
alias gl="git log --date=iso --decorate"
alias glp="git log --date=iso --decorate --patch"
alias glg="git log --date=iso --graph --decorate --oneline --all"
alias gs="git status"
alias gf="git fetch"
alias gp="git pull"
alias gst="git stash"
alias gstl="git stash list"
alias gstp="git stash pop"
alias gstd="git stash drop"
alias gpoh="git push origin HEAD"
alias pn='pnpm'
alias cat='bat'
alias ll='exa -l --icons'
alias lg='lazygit'
alias g="git"

set -x BAT_THEME 'Dracula'

set -g -x PATH $PATH /opt/homebrew/bin
source /opt/homebrew/opt/asdf/libexec/asdf.fish
starship init fish | source

# peco
function fish_user_key_bindings
    bind \cr peco_select_history
end

# gh
eval (gh completion -s fish| source)

if test -d ~/.cargo
    fish_add_path $HOME/.cargo/bin
end
