#Hello World
puts "Hello World"

adjective = "Big Bad"

puts "Hello #{adjective} World";

variable = "Hello World"
 puts variable.upcase


 #Nums Array and Enumerables


 nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

p nums.uniq!
p nums.push(90)
p nums.pop()
p nums
p nums.shift
p nums
p nums.unshift(100)
p nums.length

p nums.include? 8
p nums.find_all { |num| num>10}
p nums.all? { |num| num>0}
p nums.any? { |num| num%8 == 0}
p nums.count { |num| num>4}
nums.each_with_index do | element, index |
    p element*index
end
p nums.find { |num| num%7 == 0 && num%5 == 0 && num>0}
p nums.find_index { |num| num%7 == 0 && num%5 == 0 && num>0}
p nums.first(3)
p nums.last(5)
p nums.group_by{ |num| num%3 == 0}
p nums.min
p nums.max
p nums.reject {|num| num%3 == 0}
p nums.select {|num| num%5 == 0}
