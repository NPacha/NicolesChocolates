class World
    attr_accessor :shape, :name
    attr_reader :people

    def initialize name, shape = 'oblate spheroid'
        @shape
        @name = name
        @people = []
    end

    def populate name, age
        @people << { name: name, age: age }
    end
end
# world1 = World.new
# p world1 
# # p world1.name 
# # p world1.class
# world1.name = "Tatooine"
# # p world1.name
# p world1.people 
# world1.populate
# world1.populate
# p world1.people
world1 = World.new "Panthelassa"
world2 = World.new "Tatooine"
world3 = World.new "Nothing But Shrimp", "dome"
world4 = World.new "San Junipero"
p world1.name
p world2.name
p world3.name
p world4.name
world3.shape = "megadome"
p world3.shape

world3.populate "Elanor ShellStrop", 36
world3.populate "Dr Chidi Anagonye", 32
world3.populate "Tahani Al-Jamil", 34
world3.populate "Jianyu", 31

p world3.people



