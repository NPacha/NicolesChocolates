# Copy this text into your `.bash` homework file. Copy and paste the code you successfully used into terminal below each prompt

# Open the **Terminal app**

# Create a new directory on your desktop called `galaxy_far_far_away`and enter it
nicolepacha@Nicoles-MacBook-Pro Desktop % mkdir galaxy_far_far_away
nicolepacha@Nicoles-MacBook-Pro Desktop % cd galaxy_far_far_away 
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % 
# Create a directory called `death_star`
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % mkdir death_star
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % 
# and make the following files inside of it:
# darth_vader.txt
# princess_leia.txt
# storm_trooper.txt
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % cd death_star 
nicolepacha@Nicoles-MacBook-Pro death_star % touch darth_vader.txt princess_leia.txt storm_trooper.txt
nicolepacha@Nicoles-MacBook-Pro death_star % ls
darth_vader.txt		princess_leia.txt	storm_trooper.txt
nicolepacha@Nicoles-MacBook-Pro death_star % 

# In `galaxy_far_far_away`, make a directory named `tatooine`
nicolepacha@Nicoles-MacBook-Pro death_star % cd ..
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % mkdir tatooine
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % 

# and create the following files in it:
# luke.txt
# ben_kenobi.txt
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % cd tatooine 
nicolepacha@Nicoles-MacBook-Pro tatooine % touch luke.txt ben_kenobi.txt

# Inside of `tatooine` make a directory called `millenium_falcon`
# and in it create:
# han_solo.txt
# chewbaca.txt
nicolepacha@Nicoles-MacBook-Pro tatooine % mkdir millenium_falcon
nicolepacha@Nicoles-MacBook-Pro tatooine % cd millenium_falcon 
nicolepacha@Nicoles-MacBook-Pro millenium_falcon % touch han_solo.txt chewbaca.txt
nicolepacha@Nicoles-MacBook-Pro millenium_falcon % ls
chewbaca.txt	han_solo.txt
nicolepacha@Nicoles-MacBook-Pro millenium_falcon % 
# Rename `ben_kenobi.txt` to `obi_wan.txt
nicolepacha@Nicoles-MacBook-Pro millenium_falcon % cd .. 
nicolepacha@Nicoles-MacBook-Pro tatooine % cd ..
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % cd tatooine
nicolepacha@Nicoles-MacBook-Pro tatooine % pwd
/Users/nicolepacha/Desktop/galaxy_far_far_away/tatooine
nicolepacha@Nicoles-MacBook-Pro tatooine % mv /Users/nicolepacha/Desktop/galaxy_far_far_away/tatooine/ben_kenobi.txt obi_wan.txt
nicolepacha@Nicoles-MacBook-Pro tatooine % ls
luke.txt		millenium_falcon	obi_wan.txt
nicolepacha@Nicoles-MacBook-Pro tatooine % 
# Copy `storm_trooper.txt` from `death_star` to `tatooine`
nicolepacha@Nicoles-MacBook-Pro tatooine % cd ../..
nicolepacha@Nicoles-MacBook-Pro Desktop % cd galaxy_far_far_away 
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % cd death_star 
nicolepacha@Nicoles-MacBook-Pro death_star % cp /Users/nicolepacha/Desktop/galaxy_far_far_away/death_star/storm_trooper.txt /Users/nicolepacha/Desktop/galaxy_far_far_away/tatooine 
nicolepacha@Nicoles-MacBook-Pro death_star % 
# Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`
nicolepacha@Nicoles-MacBook-Pro death_star % cd ..                                                      
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % cd tatooine 
nicolepacha@Nicoles-MacBook-Pro tatooine % ls
luke.txt		millenium_falcon	obi_wan.txt		storm_trooper.txt
nicolepacha@Nicoles-MacBook-Pro tatooine % mv luke.txt obi_wan.txt /Users/nicolepacha/Desktop/galaxy_far_far_away/tatooine/millenium_falcon 
nicolepacha@Nicoles-MacBook-Pro tatooine % 

# Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`
nicolepacha@Nicoles-MacBook-Pro tatooine % mv millenium_falcon /Users/nicolepacha/Desktop/galaxy_far_far_away
nicolepacha@Nicoles-MacBook-Pro tatooine % cd ..
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % ls
death_star		millenium_falcon	tatooine
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away %
# Move `millenium_falcon` into `death_star`
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % mv millenium_falcon death_star
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % 
# Move `princess_leia.txt` into the `millenium_falcon`
nicolepacha@Nicoles-MacBook-Pro death_star % mv princess_leia.txt millenium_falcon 
nicolepacha@Nicoles-MacBook-Pro death_star %
# Delete `obi_wan.txt`
nicolepacha@Nicoles-MacBook-Pro death_star % cd millenium_falcon 
nicolepacha@Nicoles-MacBook-Pro millenium_falcon % ls
chewbaca.txt		luke.txt		princess_leia.txt
han_solo.txt		obi_wan.txt
nicolepacha@Nicoles-MacBook-Pro millenium_falcon % rm obi_wan.txt
nicolepacha@Nicoles-MacBook-Pro millenium_falcon %
# In `galaxy_far_far_away`, make a directory called `yavin_4`
nicolepacha@Nicoles-MacBook-Pro millenium_falcon % cd ..         
nicolepacha@Nicoles-MacBook-Pro death_star % cd ..
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % mkdir yavin_4
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % 
# Move the `millenium_falcon` out of the `death_star` and into `yavin_4`
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % cd death_star 
nicolepacha@Nicoles-MacBook-Pro death_star % ls
darth_vader.txt		millenium_falcon	storm_trooper.txt
nicolepacha@Nicoles-MacBook-Pro death_star % mv millenium_falcon /Users/nicolepacha/Desktop/galaxy_far_far_away/yavin_4 
nicolepacha@Nicoles-MacBook-Pro death_star % cd ../yavin_4 
nicolepacha@Nicoles-MacBook-Pro yavin_4 % ls
millenium_falcon
nicolepacha@Nicoles-MacBook-Pro yavin_4 % 
# Make a directory in `yavin_4` called `x_wing`
nicolepacha@Nicoles-MacBook-Pro yavin_4 % mkdir x_wing
nicolepacha@Nicoles-MacBook-Pro yavin_4 % 
# Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`
nicolepacha@Nicoles-MacBook-Pro yavin_4 % ls
millenium_falcon	x_wing
nicolepacha@Nicoles-MacBook-Pro yavin_4 % cd millenium_falcon 
nicolepacha@Nicoles-MacBook-Pro millenium_falcon % ls
chewbaca.txt		han_solo.txt		luke.txt		princess_leia.txt
nicolepacha@Nicoles-MacBook-Pro millenium_falcon % mv princess_leia.txt /Users/nicolepacha/Desktop/galaxy_far_far_away/yavin_4 
nicolepacha@Nicoles-MacBook-Pro millenium_falcon % mv luke.txt /Users/nicolepacha/Desktop/galaxy_far_far_away/yavin_4/x_wing 
nicolepacha@Nicoles-MacBook-Pro millenium_falcon % 
# Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`
nicolepacha@Nicoles-MacBook-Pro millenium_falcon % cd ..
nicolepacha@Nicoles-MacBook-Pro yavin_4 % mv x_wing /Users/nicolepacha/Desktop/galaxy_far_far_away 
nicolepacha@Nicoles-MacBook-Pro yavin_4 % mv millenium_falcon /Users/nicolepacha/Desktop/galaxy_far_far_away
nicolepacha@Nicoles-MacBook-Pro yavin_4 % cd ..
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % ls
death_star		tatooine		yavin_4
millenium_falcon	x_wing
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % 
# In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % cd death_star 
nicolepacha@Nicoles-MacBook-Pro death_star % mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
nicolepacha@Nicoles-MacBook-Pro death_star % ls
darth_vader.txt		tie_fighter_1		tie_fighter_3
storm_trooper.txt	tie_fighter_2
nicolepacha@Nicoles-MacBook-Pro death_star % 
# Move `darth_vader.txt` into `tie_fighter_1`
nicolepacha@Nicoles-MacBook-Pro death_star % mv darth_vader.txt tie_fighter_1
nicolepacha@Nicoles-MacBook-Pro death_star % cd tie_fighter_1
nicolepacha@Nicoles-MacBook-Pro tie_fighter_1 % ls
darth_vader.txt
nicolepacha@Nicoles-MacBook-Pro tie_fighter_1 % 
# Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`
nicolepacha@Nicoles-MacBook-Pro tie_fighter_1 % cd ..
nicolepacha@Nicoles-MacBook-Pro death_star % cp storm_trooper.txt tie_fighter_2
nicolepacha@Nicoles-MacBook-Pro death_star % cp storm_trooper.txt tie_fighter_3
nicolepacha@Nicoles-MacBook-Pro death_star % 

# Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`
nicolepacha@Nicoles-MacBook-Pro death_star % mv tie_fighter_1 /Users/nicolepacha/Desktop/galaxy_far_far_away
nicolepacha@Nicoles-MacBook-Pro death_star % mv tie_fighter_2 /Users/nicolepacha/Desktop/galaxy_far_far_away 
nicolepacha@Nicoles-MacBook-Pro death_star % mv tie_fighter_3 /Users/nicolepacha/Desktop/galaxy_far_far_away
nicolepacha@Nicoles-MacBook-Pro death_star % 
# Be careful with this command - cannot undo!

# Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

# This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete

# Remove `tie_fighters` 2 and 3.
nicolepacha@Nicoles-MacBook-Pro death_star % cd ..
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % ls
death_star		tatooine		tie_fighter_2		x_wing
millenium_falcon	tie_fighter_1		tie_fighter_3		yavin_4
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % pwd
/Users/nicolepacha/Desktop/galaxy_far_far_away
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % rm -r /Users/nicolepacha/Desktop/galaxy_far_far_away/tie_fighter_2
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % ls
death_star		tatooine		tie_fighter_3		yavin_4
millenium_falcon	tie_fighter_1		x_wing
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % rm -r /Users/nicolepacha/Desktop/galaxy_far_far_away/tie_fighter_3 
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % ls
death_star		tatooine		x_wing
millenium_falcon	tie_fighter_1		yavin_4
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % 
# Touch a file in "**x_wing**" called "**the_force.txt**".
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % cd x_wing 
nicolepacha@Nicoles-MacBook-Pro x_wing % touch the_force.txt
nicolepacha@Nicoles-MacBook-Pro x_wing % 

# Destroy the "**death_star**" and anyone inside of it.
nicolepacha@Nicoles-MacBook-Pro x_wing % cd ..
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % rm -r death_star 
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away %   
# Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % mv x_wing yavin_4
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % mv millenium_falcon yavin_4 
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % ls
tatooine	tie_fighter_1	yavin_4
nicolepacha@Nicoles-MacBook-Pro galaxy_far_far_away % 
# Celebrate!