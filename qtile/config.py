from libqtile import bar, layout, widget
from libqtile.config import Click, Drag, Group, Key, Match, Screen
from libqtile.lazy import lazy
from libqtile.utils import guess_terminal


mod = "mod4"
terminal = guess_terminal()

keys = [
    # A list of available commands that can be bound to keys can be found
    # at https://docs.qtile.org/en/latest/manual/config/lazy.html
    # Switch between windows
    Key([mod], "h", lazy.layout.left(), desc="Move focus to left"),
    Key([mod], "l", lazy.layout.right(), desc="Move focus to right"),
    Key([mod], "j", lazy.layout.down(), desc="Move focus down"),
    Key([mod], "k", lazy.layout.up(), desc="Move focus up"),
    # Move windows between left/right columns or move up/down in current stack.
    # Moving out of range in Columns layout will create new column.
    Key([mod, "shift"], "h", lazy.layout.shuffle_left(), desc="Move window to the left"),
    Key([mod, "shift"], "l", lazy.layout.shuffle_right(), desc="Move window to the right"),
    Key([mod, "shift"], "j", lazy.layout.shuffle_down(), desc="Move window down"),
    Key([mod, "shift"], "k", lazy.layout.shuffle_up(), desc="Move window up"),
    # Grow windows. If current window is on the edge of screen and direction
    # will be to screen edge - window would shrink.
    Key([mod, "control"], "h", lazy.layout.grow_left(), desc="Grow window to the left"),
    Key([mod, "control"], "l", lazy.layout.grow_right(), desc="Grow window to the right"),
    Key([mod, "control"], "j", lazy.layout.grow_down(), desc="Grow window down"),
    Key([mod, "control"], "k", lazy.layout.grow_up(), desc="Grow window up"),
    Key([mod], "n", lazy.layout.normalize(), desc="Reset all window sizes"),
    Key([mod], "f", lazy.window.toggle_fullscreen()),
    Key([mod], "space", lazy.window.toggle_floating()),
    Key([mod], "tab", lazy.next_layout(), desc="Toggle between layouts"),
    Key([mod], "m", lazy.next_layout(), desc="Toggle between layouts"),
    Key([mod, "shift"], "q", lazy.window.kill(), desc="Kill focused window"),
    Key([mod, "control"], "r", lazy.reload_config(), desc="Reload the config"),
    # Key([mod], "Return", lazy.spawn(terminal), desc="Launch terminal"),
    # Key([mod, "control"], "q", lazy.shutdown(), desc="Shutdown Qtile"),
    # Key([mod], "r", lazy.spawncmd(), desc="Spawn a command using a prompt widget"),
]

# groups = [Group(f"{i+1}", label="") for i in range(8)]

groups = [
    Group(name="1", label=""),
    Group(name="2", label=""),
    Group(name="3", label=""),
    Group(name="4", label=""),
    Group(name="5", label=""),
    # Group(name="6", label=""),
    # Group(name="7", label=""),
    # Group(name="8", label=""),
    # Group(name="9", label=""),
]

from typing import Callable
from libqtile.core.manager import Qtile
def go_to_group(name: str) -> Callable:
    def _inner(qtile: Qtile) -> None:
        if len(qtile.screens) == 1:
            qtile.groups_map[name].cmd_toscreen()
            return

        if name in '1234':
            qtile.focus_screen(0)
            qtile.groups_map[name].cmd_toscreen()
        else:
            qtile.focus_screen(1)
            qtile.groups_map[name].cmd_toscreen()

    return _inner

for i in groups:
    keys.append(Key([mod], i.name, lazy.function(go_to_group(i.name))))

for i in groups:
    keys.extend(
        [
            # mod1 + shift + letter of group = switch to & move focused window to group
            Key(
                [mod, "shift"],
                i.name,
                lazy.window.togroup(i.name),
                desc="Switch to & move focused window to group {}".format(i.name),
            ),
            # Or, use below if you prefer not to switch to that group.
            # # mod1 + shift + letter of group = move focused window to group
            # Key([mod, "shift"], i.name, lazy.window.togroup(i.name),
            #     desc="move focused window to group {}".format(i.name)),
        ]
    )

layouts = [
    layout.Columns(margin=4, border_focus_stack=["#1F1D2E", "#8f3d3d"], border_width=4),
    layout.Max(),
]

widget_defaults = dict(
    font="JetBrainsMono",
    fontsize=18,
    padding=8,
)
extension_defaults = widget_defaults.copy()

screens = [
    Screen(
        top=bar.Bar(
            [
                widget.Spacer(length=20,
                    background='#1F1F1F',
                ),
                widget.CurrentLayoutIcon(
                    background='#1f1f1f',
                    padding = 0,
                    scale = 0.5,
                ),
                widget.Image(
                    filename='~/.config/qtile/assets/6.png',
                ),
                widget.GroupBox(
                    fontsize=16,
                    borderwidth=3,
                    highlight_method='block',
                    active='#f2f3f3',
                    block_highlight_text_color="#f2f3f3",
                    highlight_color='#4B427E',
                    inactive='#111111',
                    foreground='#4B427E',
                    background='#534947',
                    this_current_screen_border='#897974',
                    this_screen_border='#897974',
                    other_current_screen_border='#897974',
                    other_screen_border='#695954',
                    urgent_border='#ff0000',
                    rounded=True,
                    disable_drag=True,
                 ),
                widget.Image(
                    filename='~/.config/qtile/assets/5.png',
                ),
                widget.Mpd2(
                    foreground='#ffffff',
                    background='#1f1f1f',
                    status_format='{play_status} {artist} - {title}',
                    idle_format='{play_status} {idle_message}',
                    idle_message='wait for playing....    ',
                    width=300,
                    padding=10,
                    scroll=True,
                    # font= 'JetBrains Mono Bold',
                ),
                widget.Image(
                    filename='~/.config/qtile/assets/4.png',                
                ),
                widget.Spacer(
                    width=880,
                    length=880,
                    background='#ff0000.0',
                    opacity=1,
                ),
                widget.Image(
                    filename='~/.config/qtile/assets/3.png',                
                ),   
                widget.TextBox(
                    text="﬙",
                    font="Font Awesome 5 Free Solid",
                    fontsize=26,
                    padding=0,
                    background='#1f1f1f',
                ),
                widget.Memory(format='{MemUsed:.0f}{mm}',
                    font="JetBrains Mono Bold",
                    # fontsize=12,
                    background='#1f1f1f',
                ),
                # widget.Systray(
                #     background='#1f1f1f',
                #     fontsize=2,
                # ),
                # widget.TextBox(
                #     text=' ',
                #     background='#1f1f1f',
                # ),
                widget.Image(
                    filename='~/.config/qtile/assets/2.png',                
                ),                       
                # widget.TextBox(
                #     text='| ',
                #     background='#534947',
                # ),
                widget.TextBox(
                    text="",
                    font="Font Awesome 5 Free Solid",
                    fontsize=16,
                    padding=3,
                    background='#534947',
                ),
                widget.PulseVolume(font='JetBrains Mono Bold',
                    # fontsize=12,
                    background='#534947',
                ),                
                widget.Image(
                    filename='~/.config/qtile/assets/1.png',                
                ),
                widget.TextBox(
                    text="",
                    font="Font Awesome 6 Free Solid",
                    fontsize=28,
                    padding=0,
                    background='#1F1D2E',
                ),
                widget.Clock(
                    format='%I:%M %p',
                    background='#1F1D2E',
                    font="JetBrains Mono Bold",
                ),
                widget.Spacer(
                    length=20,
                    background='#1F1D2E',
                ),
            ],
            30,
            margin = [6,6,6,6],
            background="#ff0000.0",
            opacity=1,
        ),
    ),
]

# Drag floating layouts.
mouse = [
    Drag([mod], "Button1", lazy.window.set_position_floating(), start=lazy.window.get_position()),
    Drag([mod], "Button3", lazy.window.set_size_floating(), start=lazy.window.get_size()),
    Click([mod], "Button2", lazy.window.bring_to_front()),
]

dgroups_key_binder = None
dgroups_app_rules = []  # type: list
follow_mouse_focus = False
bring_front_click = False
cursor_warp = False
floating_layout = layout.Floating(
    border_focus='#191919',
    border_normal='#191919',
    float_rules=[
        # Run the utility of `xprop` to see the wm class and name of an X client.
        *layout.Floating.default_float_rules,
        Match(wm_class="confirmreset"),  # gitk
        Match(wm_class="makebranch"),  # gitk
        Match(wm_class="maketag"),  # gitk
        Match(wm_class="ssh-askpass"),  # ssh-askpass
        Match(wm_class="kitty"),  # ssh-askpass
        Match(title="branchdialog"),  # gitk
        Match(title="pinentry"),  # GPG key password entry
        Match(title="Microbench"),  # GPG key password entry
        Match(title="Steam - News"),  # GPG key password entry
        Match(title="Friends List"),  # GPG key password entry
    ]
)
from libqtile import hook
# some other imports
import os
import subprocess
# stuff
@hook.subscribe.startup_once
def autostart():
    home = os.path.expanduser('~/.myprofile/bin/autostart.sh') 
    subprocess.call([home])

auto_fullscreen = True
focus_on_window_activation = "smart"
reconfigure_screens = True

# If things like steam games want to auto-minimize themselves when losing
# focus, should we respect this or not?
auto_minimize = True

# When using the Wayland backend, this can be used to configure input devices.
wl_input_rules = None

# XXX: Gasp! We're lying here. In fact, nobody really uses or cares about this
# string besides java UI toolkits; you can see several discussions on the
# mailing lists, GitHub issues, and other WM documentation that suggest setting
# this string if your java app doesn't work correctly. We may as well just lie
# and say that we're a working one by default.
#
# We choose LG3D to maximize irony: it is a 3D non-reparenting WM written in
# java that happens to be on java's whitelist.
wmname = "LG3D"
