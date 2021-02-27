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

#Color Array
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
p colors.sample
p colors.reverse

colors.each do |item|
    puts item.capitalize()
end

#Methods
def find_area height, width
    p height * width
end

find_area(5, 20)

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
def multiply_each_by_five arr
    arr.each do |item|
        p item * 5
    end
end

    multiply_each_by_five(nums)

#Methods With a Hash

# Hashes

book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}

def print_price myhash
    p myhash[:price]
end

print_price(book)

def print_item_sums hash1, hash2
    p hash1[:price] + hash2[:price]
end

print_item_sums(table, lamp)

#Solve Problems with Ruby
total = 0;
(1..999).each do |n|
if n%3 == 0 || n%5 == 0
    total = total + n;
        end
    end


p total

