<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Score;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Validator\ConstraintViolationList;

class ScoreController extends FOSRestController
{

    /**
     * @Rest\Get(
     *      path = "/score/show/{id}",
     *      name = "app_score_show",
     *      requirements = {"id"="\d+"}
     * )
     * @Rest\View
     */
    public function showAction(Score $score)
    {
        return $score;
    }

    /**
     * @Rest\Get(
     *      path = "/score/list",
     *      name = "app_score_list",
     * )
     * @Rest\View(
     *     serializerGroups = {"GET_LIST"}
     * )
     */
    public function listAction()
    {
        $scores = $this->getDoctrine()->getManager()->getRepository('AppBundle:Score')
            ->findBy(array(),
                array('point' => 'desc'),
                10,0);

        return $scores;
    }

    /**
     * @Rest\Post(
     *      path = "/score/create",
     *      name = "app_score_create"
     * )
     * @Rest\View(StatusCode=201)
     * @ParamConverter("score", converter="fos_rest.request_body")
     */
    public function createAction(Score $score, ConstraintViolationList $violations)
    {

        if(count($violations))
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        $em = $this->getDoctrine()->getManager();
        $em->persist($score);
        $em->flush();

        return $this->view($score, Response::HTTP_CREATED, ['Location' => $this->generateUrl('app_score_show', ['id' => $score->getId(), UrlGeneratorInterface::ABSOLUTE_URL])]);
    }
}
