set nocompatible              " be iMproved, required
" filetype off                  " required

 if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall | source $MYVIMRC
endif


call plug#begin('~/.vim/plugged')
Plug 'pangloss/vim-javascript'
Plug 'enricobacis/paste.vim'
Plug 'zirrostig/vim-schlepp'
call plug#end()


set clipboard=unnamed
" set paste
" set clipboard=unnamedextra
syntax on                   " Syntax highlighting
let rgb_file="/etc/X11/rgb.txt"

vmap <up>    <Plug>SchleppUp
vmap <down>  <Plug>SchleppDown
vmap <left>  <Plug>SchleppLeft
vmap <right> <Plug>SchleppRight


" vmap D       <Plug>SchleppDupLeft
" vmap <C-D>   <Plug>SchleppDupLeft

" nnoremap <leader>k :m-2<cr>==
" nnoremap <leader>j :m+<cr>==
" xnoremap <leader>k :m-2<cr>gv=gv
" xnoremap <leader>j :m'>+<cr>gv=gv

imap :w <F2> 
vmap  <expr>  <C-LEFT>   DVB_Drag('left')                  
vmap  <expr>  <C-RIGHT>  DVB_Drag('right')    

nmap <Space> i_<Esc>r

" colo slate 

" To ignore plugin indent changes, instead use:
" filetype plugin on

" Vim UI {
    " set tabpagemax=15               " Only show 15 tabs
    set showmode                    " Display the current mode

    " highlight clear SignColumn      " SignColumn should match background
    " highlight clear LineNr          " Current line number row will have same background color in relative mode
    "highlight clear CursorLineNr    " Remove highlight   color from current line number

    set backspace=indent,eol,start  " Backspace for dummies
    set linespace=0                 " No extra spaces between rows
    set number                      " Line numbers on
    set showmatch                   " Show matching brackets/parenthesis
    set incsearch                   " Find as you type search
    set hlsearch                    " Highlight search terms
    " set winminheight=0              " Windows can be 0 line high
    " set ignorecase                  " Case insensitive search
    " set smartcase                   " Case sensitive when uc present
    " set wildmenu                    " Show list instead of just completing
    " set wildmode=list:longest,full  " Command <Tab> completion, list matches, then longest common part, then all.
    set whichwrap=b,s,h,l,<,>,[,]   " Backspace and cursor keys wrap too
    " set scrolljump=5                " Lines to scroll when cursor leaves screen
    " set scrolloff=3                 " Minimum lines to keep above and below cursor
    " set foldenable                  " Auto fold code
    " set list
" set listchars=tab:›\ ,trail:•,extends:#,nbsp:. " Highlight problematic whitespace

" }

" Formatting {
    set ruler
    set title
    " set statusline+=\ %c,
    
    "set laststatus=2
    set statusline+=%<F
    set wrap                      " Do wrap long lines
    set autoindent                  " Indent at the same level of the previous line
    set shiftwidth=2                " Use indents of 2 spaces
    set expandtab                   " Tabs are spaces, not tabs
    " set tabstop=2                   " An indentation every four columns
    set softtabstop=2               " Let backspace delete indent
    " set nojoinspaces                " Prevents inserting two spaces after punctuation on a join (J)
    " set splitright                  " Puts new vsplit windows to the right of the current
    " set splitbelow                  " Puts new split windows to the bottom of the current
    " set matchpairs+=<:>             " Match, to be used with %
    " set pastetoggle=<F12>           " pastetoggle (sane indentation on pastes)
    "set comments=sl:/*,mb:*,elx:*/  " auto format comment blocks
    " Remove trailing whitespaces and ^M chars
    " To disable the stripping of whitespace, add the following to your
    " .vimrc.before.local file:
    "   let g:spf13_keep_trailing_whitespace = 1
    "autocmd FileType go autocmd BufWritePre <buffer> Fmt
    " autocmd BufNewFile,BufRead *.html.twig set filetype=html.twig
    " autocmd FileType haskell,js,jsx,puppet,ruby,yml, setlocal expandtab shiftwidth=2 softtabstop=2
    " preceding line best in a plugin but here for now.

" }
"


    " Setting up the directories {
        set backup                  " Backups are nice ...
        set backupdir=/home/e/.vim/tmp/backup
        set undodir=~/home/e/.vim/tmp/undo
        set directory=/home/e/.vim/tmp
        " set backupdir^=/media/C/MonadState/backup//
        if has('persistent_undo')
            set undofile                " So is persistent undo ...
            set undolevels=200         " Maximum number of changes that can be undone
            set undoreload=200        " Maximum number lines to save for undo on a buffer reload
        endif

    " if !has('gui')
        "set term=$TERM          " Make arrow and other keys work
    " endif
    " filetype plugin indent on   " Automatically detect file types.
    set mouse=a                 " Automatically enable mouse usage
    set mousehide               " Hide the mouse cursor while typing
    scriptencoding utf-8

    hi Number guifg=Red guibg=Black ctermfg=red ctermbg=black
    nnoremap <C-l> :set cursorline! cursorcolumn!<CR>
    highlight Cursor ctermfg=LightBlue ctermbg=Black
    highlight iCursor ctermfg=White ctermbg=Blue
    set guicursor=n-v-c:block-Cursor
    set guicursor+=i:ver100-iCursor
    set guicursor+=n-v-c:blinkon0
    set guicursor+=i:blinkwait10
    inoremap <C-k> <esc>:wq!<cr>   
    nnoremap <C-k> :wq!<cr>
    map <C-j> <ESC>:w!<CR>
    imap <C-j> <ESC>:w!<CR>
    nmap <C-H> :call run()<CR>
    highlight Normal guibg=black
    set background=dark
 
    hi Comment ctermfg=Blue ctermbg=Black cterm=NONE
    hi Search ctermfg=Red  ctermbg=Black cterm=underline
    hi String ctermfg=LightMagenta ctermbg=Black cterm=NONE
    hi Visual  ctermfg=Red ctermbg=Black gui=none
    hi MatchParen ctermbg=DarkGray ctermfg=Yellow cterm=underline
    hi Constant ctermbg=Black ctermfg=LightRed
    hi IncSearch ctermbg=black ctermfg=red cterm=underline 
   "  hi Curso"rLine   cterm=NONE ctermbg=darkred ctermfg=white guibg=darkred guifg=white
   "  hi CursorColumn cterm=NONE ctermbg=darkred ctermfg=white guibg=darkred guifg=white
   "  set exrc  
