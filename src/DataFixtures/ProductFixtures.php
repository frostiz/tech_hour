<?php

namespace App\DataFixtures;

use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker\Factory;

class ProductFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        for ($i = 0; $i < 20; $i++) {
            $product = new Product();

            $product->setName($faker->name);
            $product->setDescription($faker->paragraph);
            $product->setPrice($faker->numberBetween(0, 200));
            $product->setImage('https://picsum.photos/id/'.$faker->numberBetween(1, 200).'/640/480');

            $manager->persist($product);
        }

        $manager->flush();
    }
}
