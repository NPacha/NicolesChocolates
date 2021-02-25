Title: Ruby II - Exploring Methods and Enumerables<br>
Type: Exploration & Presentation<br>
Creators: Karolin Rafalski, Kristyn Bryan <br>
Topics: Ruby methods<br>
<hr>

# Explore Ruby's Methods ( Group Assignment 1 of 3 )

### Lesson Objectives
_During this lesson, students will be:_
- Use the ruby docs to find methods
- Use and explain ruby methods

<br>
<hr>

![explorers](https://www.thewrap.com/wp-content/uploads/2016/05/explorersmovie.jpg)

You will each get a Ruby method to explore. Your job is to look in the Ruby documentation to read about the method, come up with an explanation of what it is, and show an example of it in use.

You'll have until Tuesday to research and prepare with your group. You will then take turns sharing your screen and presenting your findings to the class. When you are not presenting, it's your job to listen, learn, take notes, and ask questions about what the other groups present.

[Google Sheet with assignments](https://docs.google.com/spreadsheets/d/1AO8e45suJXgsZYRvYVguiDjy5r7nOHGVgYFdx-lMGK4/edit?usp=sharing)

## Group 1
1. rstrip /rstrip!
1. reverse /reverse!
1. gsub / gsub!
1. capitalize capitalize! / upcase / upcase!
1. downcase/ downcase! / swapcase / swapcase!
1. chomp / chomp!
1. to_f / to_i / to_s 
1. to_sym / to_a
1. compact / compact!

## Group 2
1. delete_at /delete_if
1. fetch
1. flatten / flatten!
1. sample
1. zip
1. <<
1. first / last
1. step (note, you'll be doing the .step on a range of numbers, but it can then be used with an array)
1. join
## Group 3
1. reduce
1. has_key?
1. keys
1. merge / merge!
1. invert
1. odd? / even?
1. floor / next
1. times
1. Default values in parameters


# Documentation Below
[String](http://ruby-doc.org/core-2.5.5/String.html)

1. `rstrip` /`rstrip!`
1. `reverse` /`reverse!`
1. `gsub` / `gsub!`
1. `capitalize` `capitalize!` / `upcase` / `upcase!`
1. `downcase`/ `downcase!` / `swapcase` / `swapcase!`
1. `chomp` / `chomp!`
1. `to_f` / `to_i`
1. `to_str`/ `to_sym` / `to_a`

Example string: `"we researched ruby methods"`

[Array](http://ruby-doc.org/core-2.5.5/Array.html)

1. `compact` / `compact!`
1. `delete_at` /`delete_if`
1. `fetch`
1. `flatten` / `flatten!`
1. `sample`
1. `zip`
1. `<<`
1. `first` / `last`
1. `step` (note, you'll be doing the `.step` on a range of numbers, but it can then be used with an array)
1. `join`
1. `reduce`

Example array:
```ruby
students = ["An", "Todd", "Mark", "Jim", "Cathleen", "Ky", "Biren", "Geraldine", "Hanna", "Dylan", "Sheila", "Charles", "Soniya", "Jerrica", "Ellen", "Lenin", "Adam", "Stanley", "Matthew", "Anthony", "Joe", "Emily", "Amanda"]
```

[Hash](http://ruby-doc.org/core-2.5.5/Hash.html)

1. `has_key?`
1. `keys`
1. `merge` / `merge!`
1. `flatten`
1. `invert`

Example hash:
```ruby
cohort = {name: "Hopper", instructors: 4, "never_gonna_give_you_up" => "favorite song", most_played_song: "Freebird", instructors: ["Matt", "Thom", "Karolin", "Kristyn"], 100 => 200}
```

[Integer](http://ruby-doc.org/core-2.5.5/Integer.html)

1. `odd?` / `even?`
1. `floor` / `next`
1. `times`

Example integers:
```ruby
1
28
12_345_678
```

[Method](http://www.skorks.com/2009/08/method-arguments-in-ruby/)
1. Default values in parameters

### Enumerables

[The Enumerable module provides a set of methods to traverse, search, sort and manipulate collections](http://ruby.bastardsbook.com/chapters/enumerables/)
1. for in
1. each do
1. each with index
1. map
1. `select` / `select!`

## Post your notes and example in Slack

When it's your turn to present, post your topic, notes, and comment in Slack so that others can put it into their notes. Make sure your notes include at least one code example.

### Formatting for Slack:
![formatting](https://i.imgur.com/R1J1OOg.png)

### Example

![slack](https://i.imgur.com/jd2Xg3y.png)
