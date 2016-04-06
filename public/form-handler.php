<?php
require __DIR__ . '/vendor/autoload.php';
date_default_timezone_set('Europe/Moscow');

$post = $_POST;
$formId = isset($post['form_id']) ? $post['form_id'] : null;

use DigitalHammer\LpForms\Form;
use DigitalHammer\LpForms\Mailer;
use DigitalHammer\LpForms\FormHandler;

/**
 * Settings
 */
$siteName = 'Your site name';
$mailFrom = ['from@mail.com', $siteName];
$mailTo = 'to@mail.com';

/**
 * Modal form
 */
$modalFormMailer = new Mailer($mailFrom, $mailTo);
$modalFormMailer->setSubject('Новый запрос с сайта ' . $siteName);
$modalForm = new Form('callback', $post, $modalFormMailer);
$modalForm
    ->addField('name', ['required', 'lengthMax:50'])
    ->addField('email', ['required', 'lengthMax:50'])
    ->addField('phone', ['required', 'lengthMax:50'])
    ->addField('service', ['required'])
    ->setFieldNames([
        'name' => 'Ваше имя',
        'email' => 'Ваш email',
        'phone' => 'Ваш телефон',
        'service' => 'Услуга',
    ])
    ->setMessageBodyTemplate('emails/modal');

$formHandler = new FormHandler();
$formHandler->addForm($modalForm);

// Handle form!
$formHandler->handle($formId);